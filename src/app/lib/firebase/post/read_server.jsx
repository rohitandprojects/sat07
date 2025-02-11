import { getDocs, collection, getDoc, doc, query, orderBy, where } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
//import { db } from "../../firebase";

export const getAllPosts = async () => {
    return await getDocs(collection(db, 'posts')).then((snaps) => snaps.docs.map((d) => d.data()))
}

/*
export const getFirstCategory = async (categoryId) => {
    const q = query(collection(db, 'posts'), where('categoryId', '==', 'Chilli-Powder'))
    return await getDocs(q).then((snaps) => snaps.docs.map((d) => d.data()))
}*/
const categoryId = undefined;

export const getAllPostsWithCategory = async (categoryId) => {
    //const q = undefined;
    if (categoryId !== undefined) {
        const collectionRef = collection(db, 'posts');
        const q = query(collectionRef, where('categoryId', '==', categoryId), orderBy('timestamp', 'desc'));
        //, where("timestamp", ">", 1), orderBy('timestamp', 'desc')
        /* const q = query(collectionRef)
        .where('categoryId', '==', categoryId)
        .orderBy('timestamp', 'desc');
        const query = firebase
        .firestore()
        .collection()
        .where('categoryId', '==', categoryId)
        .orderBy('timestamp', 'asc');*/
         return await getDocs(q).then((snaps) => snaps.docs.map((d) => d.data()));
    }
    else {
        console.error("Category is undefined, cannot run query");
      }
    
}

export const getPosts = async (id) => {
    return await getDoc(doc(db, `posts/${id}`)).then((snap) => snap.data());
}