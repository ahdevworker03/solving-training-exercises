import http from 'node:http';
import { readFile } from 'node:fs/promises';

const HOST = '127.0.0.1';
const PORT = Number(process.env.PORT || 4177);
const recordsByKey = new Map();
const recordsById = new Map();
let nextId = 1;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function send(res, status, body, type = 'application/json; charset=utf-8') {
  if (res.destroyed || res.writableEnded) return;
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(type.startsWith('application/json') ? JSON.stringify(body) : body);
}

async function readJson(req) {
  let raw = '';
  for await (const chunk of req) {
    raw += chunk;
    if (raw.length > 8_192) throw new Error('payload too large');
  }
  return JSON.parse(raw || '{}');
}

const server = http.createServer(async (req, res) => {
  let url;
  try {
    url = new URL(req.url, `http://${HOST}:${PORT}`);
  } catch {
    send(res, 400, { ok: false, error: 'Invalid request URL' });
    return;
  }
  try {
    if (req.method === 'GET' && url.pathname === '/') {
      send(res, 200, await readFile(new URL('./index.html', import.meta.url), 'utf8'), 'text/html; charset=utf-8');
      return;
    }
    if (req.method === 'GET' && url.pathname === '/api/ok') {
      send(res, 200, { ok: true, message: 'This is a successful response.' }); return;
    }
    if (req.method === 'GET' && url.pathname === '/api/business-failure') {
      send(res, 200, { ok: false, error: 'The operation was rejected by the domain rules.' }); return;
    }
    if (req.method === 'GET' && url.pathname === '/api/http-error') {
      send(res, 422, { ok: false, error: 'Validation failed.' }); return;
    }
    if (req.method === 'GET' && url.pathname === '/api/invalid-json') {
      send(res, 200, '{"broken":', 'text/plain; charset=utf-8'); return;
    }
    if (req.method === 'GET' && url.pathname === '/api/slow') {
      const ms = Math.max(0, Math.min(4000, Number(url.searchParams.get('ms') || '1000') || 1000));
      await sleep(ms); send(res, 200, { ok: true, waitedMs: ms }); return;
    }
    if (req.method === 'GET' && url.pathname === '/api/stats') {
      send(res, 200, { created: recordsById.size }); return;
    }
    const match = /^\/api\/operations\/(\d+)$/.exec(url.pathname);
    if (req.method === 'GET' && match) {
      const item = recordsById.get(Number(match[1]));
      send(res, item ? 200 : 404, item || { ok: false, error: 'Not found' }); return;
    }
    if (req.method === 'POST' && url.pathname === '/api/operations') {
      const key = req.headers['idempotency-key'];
      if (typeof key !== 'string' || !key.trim()) {
        send(res, 400, { ok: false, error: 'Idempotency-Key required' }); return;
      }
      let input;
      try { input = await readJson(req); }
      catch { send(res, 400, { ok: false, error: 'Invalid JSON' }); return; }
      if (typeof input.name !== 'string' || !input.name.trim()) {
        send(res, 422, { ok: false, error: 'Nonempty name required' }); return;
      }
      const serialized = JSON.stringify({ name: input.name });
      const existing = recordsByKey.get(key);
      if (existing) {
        if (existing.fingerprint !== serialized) {
          send(res, 409, { ok: false, error: 'Key reused with a different payload' }); return;
        }
        send(res, 200, existing.result); return;
      }
      const result = { ok: true, id: nextId++, name: input.name, state: 'pending' };
      recordsByKey.set(key, { fingerprint: serialized, result });
      recordsById.set(result.id, result);
      setTimeout(() => { result.state = 'completed'; }, 350);
      await sleep(700); // client could disconnect while the server-side operation finishes
      send(res, 201, result); return;
    }
    send(res, 404, { ok: false, error: 'Unknown route' });
  } catch (err) {
    send(res, 500, { ok: false, error: 'Unexpected server error' });
    console.error(err);
  }
});
server.listen(PORT, HOST, () => console.log(`Training API: http://${HOST}:${PORT}`));
