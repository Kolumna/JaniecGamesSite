import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

  nuxtApp.vueApp.provide('auth', auth);
  nuxtApp.provide('auth', auth);
});
