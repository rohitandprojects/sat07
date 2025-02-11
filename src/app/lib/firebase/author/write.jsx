// create new Authors

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/app/lib/firebase";
//import { db, storage } from "../../firebase";
import { Timestamp, collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
var auth_id;
export const createNewAuthors = async ({data, image}) => {
    if(!data?.name) {
        throw new Error("Name is undefined");
    }
    /*if(!data?.slug) {
        throw new Error("Slug is undefined");
    }*/
    if(!image) {
        throw new Error("Image is not selected");
    }
    
    auth_id = doc(collection(db, 'ids')).id;

    const imageRef =  ref(storage, `authors/${auth_id}`);
    await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(imageRef);

    const firestoreRef = doc(db, `authors/${auth_id}`)
    await setDoc(firestoreRef, {
        ...data,
        id : auth_id,
        photoURL: imageURL,
        timestamp : Timestamp.now()
    })
}

/*s-update*/
export const updateAuthors = async ({data, image}) => {
    if(!data?.name) {
        throw new Error("Name is undefined");
    }
    /*if(!data?.slug) {
        throw new Error("Slug is undefined");
    }*/
    var imageURL = data?.photoURL;
    if(image) {
        const imageRef =  ref(storage, `authors/${auth_id}`);
        await uploadBytes(imageRef, image);
         imageURL = await getDownloadURL(imageRef);       
    }
    const firestoreRef = doc(db, `authors/${data?.id}`)
    await updateDoc(firestoreRef, {
        ...data,
        photoURL: imageURL,
        timestamp : Timestamp.now()
    })
}
/*e-update*/

/*s-delete*/
export const deleteAuthors = async (id) => {
    if(!id){
        throw new Error("ID is required");
    }
    await deleteDoc(doc(db, `authors/${id}`));
}
/*s-delete*/