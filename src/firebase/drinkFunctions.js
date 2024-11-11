import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import db from "../firebase/init";

export default class drinkFunctions {
  //query(collectionReference, queryFilter())
  static async getAllDrinks() {
    const drinks = [];
    const querySnap = await getDocs(query(collection(db, "drinks"), orderBy("name")));
    querySnap.forEach((doc) => {
      drinks.push({ ...doc.data(), id: doc.id });
    });
    return drinks;
  }

  static async getDrink(id) {
    const docRef = doc(db, "drinks", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }

  static async deleteDrink(id) {
    confirm("Are you sure? this data will be lost");
    try {
      await deleteDoc(doc(db, "drinks", id)).then(() => {
        console.log(`drink with id ${id} deleted`);
      });
    } catch (e) {
      console.log(`error deleting drink with id ${id}`, e);
    }
  }
}
