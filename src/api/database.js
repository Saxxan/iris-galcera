import { collection, addDoc, getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

// Commercial projects

export function getCommercials() {
  getDoc(doc(db, "projects", "commercials")).then((res) => {
    console.log(res.data());
  });
}

// export function deleteTestData() {
//   deleteDoc(doc(db, "data-commercials", "G3BtDkm1zcP5CaEnETy5"));
// }
