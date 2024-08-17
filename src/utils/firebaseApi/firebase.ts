import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { SignInUp } from "../interface";

export const signUp = async (
  email: string,
  password: string
): Promise<SignInUp | null> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return {
      email: user.email,
      displayName: user?.providerData?.[0]?.displayName || "No Name Provided",
    };
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
    return null;
  }
};

export const signIn = async (
  email: string,
  password: string
): Promise<SignInUp | null> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return {
      email: user.email,
      displayName: user.displayName || "No Name Provided",
    };
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
    return null;
  }
};

export const updateUserProfile = async (
  displayName: string,
  photoURL: string = ""
): Promise<boolean | null> => {
  try {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL,
      });
      return true;
    } else {
      alert("No user is currently signed in.");
    }
  } catch (error) {
    const errorMessage = error.message;
    alert(errorMessage);
    return null;
    // Handle the error (e.g., show a message to the user)
  }
};
