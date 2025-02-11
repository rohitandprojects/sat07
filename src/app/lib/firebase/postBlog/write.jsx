// create new posts

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/app/lib/firebase";
//import { db, storage } from "../../firebase";
import { Timestamp, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";

export const createNewPosts = async ({data, image}) => {
    /*debugger;*/
    if(!data?.name) {
        throw new Error("Name is undefined");
    }
    if(!data?.slug) {
        throw new Error("Slug is undefined");
    }
    if(!image) {
        throw new Error("Image is not selected");
    }
    
    const imageRef =  ref(storage, `postsBlog/${data?.slug}`);
    await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(imageRef);

    const firestoreRef = doc(db, `postsBlog/${data?.slug}`)
    await setDoc(firestoreRef, {
        ...data,
        id : data?.slug,
        productURL: imageURL,
        timestamp : Timestamp.now()
    })
}

/*s-update*/
export const updatePosts = async ({data, image}) => {
    if(!data?.name) {
        throw new Error("Name is undefined");
    }
    if(!data?.slug) {
        throw new Error("Slug is undefined");
    }
    var imageURL = data?.productURL;
    if(image) {
        const imageRef =  ref(storage, `postsBlog/${data?.slug}`);
        await uploadBytes(imageRef, image);
         imageURL = await getDownloadURL(imageRef);       
    }
    
    /*const fssai = ref(storage, `logos/fssai`);
    const fssaiUrl = await getDownloadURL(fssai);
    debugger;*/

    const firestoreRef = doc(db, `postsBlog/${data?.id}`)
    await updateDoc(firestoreRef, {
        ...data,
        productURL: imageURL,
        /*timestamp : Timestamp.now()*/
    })
}
/*e-update*/

/*s-delete*/
export const deletePosts = async (id) => {
    if(!id){
        throw new Error("ID is required");
    }
    await deleteDoc(doc(db, `postsBlog/${id}`));
}
/*s-delete*/