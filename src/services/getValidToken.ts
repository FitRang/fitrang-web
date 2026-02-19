import { getAuth } from "firebase/auth";

export async function getValidToken(): Promise<string> {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not logged in");
  }

  const token = await user.getIdToken();

  localStorage.setItem("id_token", token);

  return token;
}
