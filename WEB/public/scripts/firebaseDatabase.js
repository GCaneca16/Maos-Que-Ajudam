// import { getDatabase, ref, set } from "firebase/database";
import { getDatabase, ref, set, child, get } from 'https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js';
import firebaseApp from "./firebaseConfig.js";
import { getFirestore,collection, addDoc, getDocs, setDoc,doc} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
const db = getFirestore(firebaseApp);
export async function StorePedido(objData,docId=1)
{
    
    try {
if(docId != 1)
{
    const docRef = await setDoc(doc(db, "pedidos",docId),objData);
    
}
else
{
    const docRef = await addDoc(collection(db, "pedidos"),objData);
}
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function RequestPedidos (userid)
 {
    const querySnapshot = await getDocs(collection(db, "pedidos"));
   
    return querySnapshot;

}