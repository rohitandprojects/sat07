import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
/*
export const getCategoryFirst = async (id) => {
    return await getDoc(doc(db, `categoriesInter/${id}`)).then((snap) => snap.data());
}*/

export const getCategory = async (id) => {
    return await getDoc(doc(db, `categoriesBlog/${id}`)).then((snap) => snap.data());
}
/*
export const getAllCategories = async () => {
    return await getDocs(collection(db, 'categoriesInter')).then((snaps) => snaps.docs.map((d) => d.data()));
}
*/
export const getAllCategories = async () => {
    const collectionRef = collection(db, 'categoriesBlog');
    const q = query(collectionRef, orderBy('timestamp', 'desc'));
    const postCollectionsSnapshot = await getDocs(q);
    return postCollectionsSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
    }))
    //return await getDocs(collection(db, 'categories'), orderBy('timestamp', 'desc')).then((snaps) => snaps.docs.map((d) => d.data()));
}