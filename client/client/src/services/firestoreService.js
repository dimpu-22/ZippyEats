import { db } from "../firebase/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const saveUser = async (uid, data) => {
  await setDoc(doc(db, "users", uid), data);
};

export const getUser = async (uid) => {
  const userDoc = await getDoc(doc(db, "users", uid));

  if (userDoc.exists()) {
    return userDoc.data();
  }

  return null;
};