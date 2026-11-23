const id : number | null = 9;
function MarkabLogging (Logs : number): void {
  console.log(Logs);
}
function AlwaysError (message : string): never {
  throw new Error(message);
}
