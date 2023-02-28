import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, DocumentData } from "firebase/firestore";

export const createUser = async (
  email: string,
  password: string,
  username: string
) => {
  const auth = getAuth();
  const credentials: any = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  try {
    await profileSet(credentials?.user?.uid, username);
  } catch(err) {
    alert('Coś poszlo nie tak :(')
  }
  return credentials;
};

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials;
};

export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser: any = useUser();
  firebaseUser.value = auth.currentUser;

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      const data = await getUserData(uid);
      const userData: any = useUserData();
      userData.value = data;
    }
    firebaseUser.value = user;
  });
};

export const signOutUser = async () => {
  const auth = getAuth();
  const result = await auth.signOut();
};

const profileSet = async (uid: string, username: string) => {
  const db = getFirestore();
  await setDoc(doc(db, "users", uid), {
    UID: uid,
    username: username,
  });
};

export const getUserData = async (uid: string) => {
  const db = getFirestore();
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  const result: any = docSnap.data();
  return result.username;
};
