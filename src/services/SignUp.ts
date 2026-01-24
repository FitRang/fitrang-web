import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification
} from "firebase/auth";
import { app } from "./firebaseInit";

export async function signUp(email: string, password: string) {
  const auth = getAuth(app);

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  await sendEmailVerification(user);

  // return {
  //   uid: user.uid,
  //   email: user.email,
  //   emailVerified: user.emailVerified,
  // };
  return user.getIdToken()
}
