import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.FIREBASE_API_KEY,
    authDomain: "janiecgames-dev.firebaseapp.com",
    projectId: "janiecgames-dev",
    storageBucket: "janiecgames-dev.appspot.com",
    messagingSenderId: "796207594611",
    appId: "1:796207594611:web:55c0cc930ec09385833e06",
    measurementId: "G-5ZE0WLJFTE",
  };

  const app = initializeApp(firebaseConfig);

  initUser();

  const auth = getAuth();
  const db = getFirestore(app);

  // const test: Array<any> = []

  // onAuthStateChanged(auth, async (user) => {
  //   if (user) {
  //     return test.push('elo')
  //   }
  // });

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);
  nuxtApp.vueApp.provide("db", db);
  nuxtApp.provide("db", db);

});
