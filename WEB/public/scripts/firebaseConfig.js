import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js'

const firebaseConfig = {
    apiKey: "AIzaSyCqj868JLR8BpZKLsFqFk52EPfkX8qTNz8",
    authDomain: "maos-que-ajudam-gcaneca.firebaseapp.com",
    databaseURL: "https://maos-que-ajudam-gcaneca-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "maos-que-ajudam-gcaneca",
    storageBucket: "maos-que-ajudam-gcaneca.appspot.com",
    messagingSenderId: "925222522786",
    appId: "1:925222522786:web:04b1579df35531316b6cfb"
};

const app = initializeApp(firebaseConfig);
export default app;