import { getAuth } from "firebase/auth";
import { app } from "./firebaseInit";

export async function getValidToken(): Promise<string> {
  const auth = getAuth(app);
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User not logged in");
  }

  const token = await user.getIdToken();

  localStorage.setItem("id_token", token);

  return token;
}
