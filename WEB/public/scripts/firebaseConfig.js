import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js'

const firebaseConfig = {
    apiKey: "AIzaSyDeYTwlTtSfJa4_2Y_HNJE-poEsuheLL3M",
  authDomain: "maos-que-ajudam-sud.firebaseapp.com",
  databaseURL: "https://maos-que-ajudam-sud-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "maos-que-ajudam-sud",
  storageBucket: "maos-que-ajudam-sud.appspot.com",
  messagingSenderId: "24254214401",
  appId: "1:24254214401:web:f386b6227e752552a36b00",
  measurementId: "G-DN6EMRZFM6"
};

const app = initializeApp(firebaseConfig);
export default app;