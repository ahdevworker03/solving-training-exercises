type User = { id: number, name: string};
type FutureUser = Promise<User>;
type FutureUsers = Promise<User[]>;
