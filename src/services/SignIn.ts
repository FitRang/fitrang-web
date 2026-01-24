import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

export async function signIn(email: string, password: string) {
  const auth = getAuth();

  const cred = await signInWithEmailAndPassword(auth, email, password);
  const user = cred.user;

  if (!user.emailVerified) {
    // Optional: resend verification email
    // await sendEmailVerification(user);

    throw new Error("Please verify your email before logging in");
  }

  const token = await user.getIdToken(true);
  return token;
}
