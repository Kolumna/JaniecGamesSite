import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail 
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  query,
  collection,
  getDocs,
} from "firebase/firestore";

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
  } catch (err) {
    alert("Coś poszlo nie tak :(");
  }
  return credentials;
};

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth();
  // console.log('logowanie')
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

  // console.log('sprawdzam auth')
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

export const passwordReset = async (email: string) => {
  const auth = getAuth();
  const result = await sendPasswordResetEmail(auth, email)
  return result
}

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

export const getPostsData = async () => {
  const db = getFirestore();
  const q: any = query(collection(db, "posts"));
  const querySnap = await getDocs(q);
  const result: Array<any> = [];
  querySnap.forEach((e) => {
    result.unshift({ dane: e.data(), id: e.id });
  });
  return result;
};

export const getPostDetails = async (id: string) => {
  const db = getFirestore();
  const docRef = doc(db, "posts", id);
  const docSnap: any = await getDoc(docRef).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  const result: any = docSnap.data();
  return result;
};
