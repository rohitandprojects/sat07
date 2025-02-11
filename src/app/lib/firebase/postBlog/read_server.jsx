import { getDocs, collection, getDoc, doc, query, orderBy, where } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
//import { db } from "../../firebase";

export const getAllPosts = async () => {
    return await getDocs(collection(db, 'postsBlog')).then((snaps) => snaps.docs.map((d) => d.data()))
}

/*
export const getFirstCategory = async (categoryId) => {
    const q = query(collection(db, 'posts'), where('categoryId', '==', 'Chilli-Powder'))
    return await getDocs(q).then((snaps) => snaps.docs.map((d) => d.data()))
}*/

export const getAllPostsWithCategory = async (categoryId) => {
    const collectionRef = collection(db, 'postsBlog');
    const q = query(collectionRef, where('categoryId', '==', categoryId), orderBy('timestamp', 'desc'));
    return await getDocs(q).then((snaps) => snaps.docs.map((d) => d.data()));

   /*const q = query(collection(db, 'postsBlog'), where('categoryId', '==', categoryId))
    return await getDocs(q).then((snaps) => snaps.docs.map((d) => d.data()))*/
}

export const getPosts = async (id) => {
    return await getDoc(doc(db, `postsBlog/${id}`)).then((snap) => snap.data());
}