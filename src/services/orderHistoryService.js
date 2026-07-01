import { db } from "../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export const getOrders = async (userId) => {
  const q = query(
    collection(db, "orders"),
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};