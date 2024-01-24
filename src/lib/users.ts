type User = {
  id: number;
  username: string;
};

export function registerUser(user: User): User {
  if (!user) throw new Error("Username is required");

  return { ...user, id: 1 };
}
