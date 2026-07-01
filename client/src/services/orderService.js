import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const saveOrder = async (order) => {
  try {
    await addDoc(collection(db, "orders"), {
      ...order,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};