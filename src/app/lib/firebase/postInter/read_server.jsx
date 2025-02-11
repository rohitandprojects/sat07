import { getDocs, collection, getDoc, doc, query, orderBy, where } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
//import { db } from "../../firebase";

export const getAllPosts = async () => {
    return await getDocs(collection(db, 'postsInter')).then((snaps) => snaps.docs.map((d) => d.data()))
}

/*
export const getFirstCategory = async (categoryId) => {
    const q = query(collection(db, 'posts'), where('categoryId', '==', 'Chilli-Powder'))
    return await getDocs(q).then((snaps) => snaps.docs.map((d) => d.data()))
}*/

export const getAllPostsWithCategory = async (categoryId) => {
    const collectionRef = collection(db, 'postsInter');
    const q = query(collectionRef, where('categoryId', '==', categoryId), orderBy('timestamp', 'desc'));
    return await getDocs(q).then((snaps) => snaps.docs.map((d) => d.data()));

    /*const q = query(collection(db, 'postsInter'), where('categoryId', '==', categoryId))
    return await getDocs(q).then((snaps) => snaps.docs.map((d) => d.data()))*/
}

export const getPosts = async (id) => {
    return await getDoc(doc(db, `postsInter/${id}`)).then((snap) => snap.data());
}