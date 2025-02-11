// create new category

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/app/lib/firebase";
//import { db, storage } from "../../firebase";
import { Timestamp, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";

export const createNewCategory = async ({data, image}) => {
    if(!data?.name) {
        throw new Error("Name is undefined");
    }
    if(!data?.slug) {
        throw new Error("Slug is undefined");
    }
    if(!image) {
        throw new Error("Image is not selected");
    }
    
    const imageRef =  ref(storage, `outdoors/${data?.slug}`);
    await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(imageRef);

    const firestoreRef = doc(db, `outdoors/${data?.slug}`)
    await setDoc(firestoreRef, {
        ...data,
        id : data?.slug,
        iconURL: imageURL,
        timestamp : Timestamp.now()
    })
}

/*s-update*/
export const updateCategory = async ({data, image}) => {
    if(!data?.name) {
        throw new Error("Name is undefined");
    }
    if(!data?.slug) {
        throw new Error("Slug is undefined");
    }
    var imageURL = data?.iconURL;
    if(image) {
        const imageRef =  ref(storage, `outdoors/${data?.slug}`);
        await uploadBytes(imageRef, image);
         imageURL = await getDownloadURL(imageRef);       
    }
    const firestoreRef = doc(db, `outdoors/${data?.id}`)
    await updateDoc(firestoreRef, {
        ...data,
        iconURL: imageURL,
        //timestamp : Timestamp.now()
    })
}
/*e-update*/

/*s-delete*/
export const deleteCategory = async (id) => {
    if(!id){
        throw new Error("ID is required");
    }
    await deleteDoc(doc(db, `outdoors/${id}`));
}
/*s-delete*/