import { collection, addDoc, getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

//****************** Commercial projects *******************/

export const getCommercials = async () => {
  let projects = await getDoc(doc(db, "projects", "commercials"));
  return projects.data();
};

//******************  Film projects ***********************/

export const getFilm = async () => {
  let projects = await getDoc(doc(db, "projects", "film"));
  return projects.data();
};

//******************  TV series projects ***********************/

export const getTVSeries = async () => {
  let projects = await getDoc(doc(db, "projects", "tvseries"));
  return projects.data();
};
