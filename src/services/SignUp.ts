import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseInit";

export async function signUpAndGetToken(email: string, password: string): Promise<string> {
  const auth = getAuth(app);

  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  const token = await user.getIdToken();

  return token;
}
