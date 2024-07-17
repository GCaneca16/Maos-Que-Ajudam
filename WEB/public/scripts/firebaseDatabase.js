// import { getDatabase, ref, set } from "firebase/database";
import { getDatabase, ref, set, child, get } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js';
import firebaseApp from "./firebaseConfig.js";

const database = getDatabase(firebaseApp);

export const StorePedido = (objData) => {
    set(ref(database, 'pedidos'), { ...objData });
}

export const RequestPedidos = () => {
    const dbRef = ref(database);
    return get(child(dbRef, 'pedidos')).then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null
        }
    }).catch((error) => {
        console.error(error);
    });
}