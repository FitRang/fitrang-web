import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "./firebaseInit";

const provider = new GoogleAuthProvider();

export async function signUpAndGetToken(): Promise<string> {
  const auth = getAuth(app);

  const result = await signInWithPopup(auth, provider);

  const user = result.user;

  const token = await user.getIdToken();

  return token;
}

