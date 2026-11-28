type User = {
  id: number;
  name: string;
  password: string;
};

type PublicUser = Omit<User, "password">;

const user: User = {
  id: 1,
  name: "Ali",
  password: "example-password"
};

const publicUser: PublicUser = user;

const publicUser2: PublicUser = { id: user.id , name: user.name }

console.log(publicUser);

console.log(publicUser2);
