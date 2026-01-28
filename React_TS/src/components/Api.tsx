type ApiUser = {
  id: number;
  name: string;
  email: string;
};

async function getUser(): Promise<ApiUser> {
  const res = await fetch("/api/user");
  return res.json();
}
