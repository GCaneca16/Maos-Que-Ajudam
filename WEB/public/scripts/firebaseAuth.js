import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js';
import firebaseApp from "./firebaseConfig.js";

const auth = getAuth(firebaseApp);

export const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            error.isError = true;
            return error;
        });
};

export const CreateAccount = (email, password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            return user;
        })
        .catch((error) => {
            error.isError = true;
            return error;
        });
}