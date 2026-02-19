import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

export async function signIn(email: string, password: string) {
  const auth = getAuth();

  const cred = await signInWithEmailAndPassword(auth, email, password);
  const user = cred.user;

  if (!user.emailVerified) {
    throw new Error("Please verify your email before logging in");
  }

  const token = await user.getIdToken();

  localStorage.setItem("id_token", token);

  return token;
}
