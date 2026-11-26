type OnSave = (title: string) => void;

function saveTitle(text: string, onSave: OnSave): void {
  const title = text.trim();
  onSave(title);
}

saveTitle("  Learn TypeScript  ", (title) => {
  console.log(title);
});