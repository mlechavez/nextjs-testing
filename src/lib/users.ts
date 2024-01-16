type User = {
  id: number;
  username: string;
};

export function registerUser(user: User | null | undefined): User {
  if (!user) throw new Error("Username is required");

  return { ...user, id: 1 };
}
