import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import db from "./init.js";

// Follow this pattern for other Models
/******
 * TODO
 *  Create OK
 *  update
 *  Read all OK
 *  read one
 *  Delete
 */

export default class drinkFunctions {
  static async createDrink(drink) {
    try {
      const d = await addDoc(collection(db, "drinks"), { ...drink });
      console.log(`${drink.name} created successfully with id ${d.id}`);
    } catch (e) {
      console.log("error creating drink", e);
    }
  }

  //query(collectionReference, queryFilter())
  static async getAllDrinks() {
    const drinks = [];
    const querySnap = await getDocs(query(collection(db, "drinks")));
    querySnap.forEach((doc) => {
      drinks.push(doc.data());
    });
    return drinks;
  }

  static async updateDrink(drink) {
    const drinkRef = doc(db);
    await updateDoc(drinkRef, {});
  }

  static async deleteDrink(id) {
    try {
      debugger;
      await deleteDoc(db, "drinks", id);
      console.log(`${drink.name} deleted successfully`);
    } catch (e) {
      console.log("error deleting drink", e);
    }
  }
}
