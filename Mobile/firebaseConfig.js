// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeYTwlTtSfJa4_2Y_HNJE-poEsuheLL3M",
  authDomain: "maos-que-ajudam-sud.firebaseapp.com",
  projectId: "maos-que-ajudam-sud",
  storageBucket: "maos-que-ajudam-sud.appspot.com",
  messagingSenderId: "24254214401",
  appId: "1:24254214401:web:f386b6227e752552a36b00",
  measurementId: "G-DN6EMRZFM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };