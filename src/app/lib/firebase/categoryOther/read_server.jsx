import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getOtherCategoryFirst = async (id) => {
    return await getDoc(doc(db, `otherCategories/${id}`)).then((snap) => snap.data());
}

export const getOtherCategory = async (id) => {
    return await getDoc(doc(db, `otherCategories/${id}`)).then((snap) => snap.data());
}

export const getAllOtherCategories = async () => {
    return await getDocs(collection(db, 'otherCategories')).then((snaps) => snaps.docs.map((d) => d.data()));
}

 