import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import db from "./init.js";

// Follow this pattern for other Models
/******
 * TODO
 *  Create OK
 *  update
 *  Read
 *  Delete
 */

export default class drinkFunctions {
  static async createDrink(drink) {
    try {
      await setDoc(doc(db, "drinks", drink.name), drink);
      console.log(`${drink.name} created successfully`);
    } catch (e) {
      console.log("error creating drink", e);
    }
  }

  //query(collectionReference, queryFilter())
  static async getAllDrinks() {
    const drinks = [];
    const querySnap = await getDocs(query(collection(db, "drinks")));

    querySnap.forEach((doc) => drinks.push(doc.data()));
    return drinks;
  }
}
