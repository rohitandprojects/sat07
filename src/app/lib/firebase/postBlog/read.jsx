"use client";

//import { collection } from "@app/firebase/firestore";
//import { db } from "../../firebase";
import { db } from "@/app/lib/firebase";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import useSWRSubscription from 'swr/subscription' ;

export function usePosts(){
    const { data, error } = useSWRSubscription(['postsBlog'], ([path], { next }) => {
        const ref = collection(db, path);

        const unsub = onSnapshot(ref, (snaps) => {
            next(null, snaps.docs.map((v) => v.data()))
        }, (error) => {
            next(error?.message)
        })
        return () => unsub();

    })
    return {
        data,
        error,
        isLoading: data === undefined ? true : false,
    }
}

/*s-update product*/
export const getPosts = async (id) => {
    return await getDoc(doc(db, `postsBlog/${id}`));
}
/*e-update product*/