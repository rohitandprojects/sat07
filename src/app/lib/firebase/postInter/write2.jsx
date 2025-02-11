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

    const imageRef =  ref(storage, `postsInter/${data?.slug}`);
    await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(imageRef);

    // const redIconOneimageRef = ref(storage, `postsInter/${data?.slug}-one`);
    // await uploadBytes(redIconOneimageRef, redIconOne);
    // const redIconOneimageURL = await getDownloadURL(redIconOneimageRef);

    // const redIconTwoimageRef = ref(storage, `postsInter/${data?.slug}-two`);
    // await uploadBytes(redIconTwoimageRef, redIconTwo);
    // const redIconTwoimageURL = await getDownloadURL(redIconTwoimageRef);

    // const redIconThreeimageRef = ref(storage, `postsInter/${data?.slug}-three`);
    // await uploadBytes(redIconThreeimageRef, redIconThree);
    // const redIconThreeimageURL = await getDownloadURL(redIconThreeimageRef);

    // const redIconFourimageRef = ref(storage, `postsInter/${data?.slug}-four`);
    // await uploadBytes(redIconFourimageRef, redIconFour);
    // const redIconFourimageURL = await getDownloadURL(redIconFourimageRef);

    const firestoreRef = doc(db, `postsInter/${data?.slug}`)
    await setDoc(firestoreRef, {
        ...data,
        id : data?.slug,
        productURL: imageURL,
       /* redIconOneURL: redIconOneimageURL,
        redIconTwoURL: redIconTwoimageURL,
        redIconThreeURL: redIconThreeimageURL,
        redIconFourURL: redIconFourimageURL,*/
        timestamp : Timestamp.now()
    })
}

/*s-update*/
export const updatePosts = async ({data, image}) => {
    if(!data?.name) {
        throw new Error("Name is not undefined");
    }
    if(!data?.slug) {
        throw new Error("Slug is undefined");
    }
   /* if(!data?.slogan1) {
        throw new Error("Slogan first Line is undefined");
    }
    if(!data?.slogan2) {
        throw new Error("Slogan second Line is undefined");
    }*/
    var imageURL = data?.productURL;
    if(image) {
        const imageRef =  ref(storage, `postsInter/${data?.slug}`);
        await uploadBytes(imageRef, image);
         imageURL = await getDownloadURL(imageRef);       
    }
    
    /*const fssai = ref(storage, `logos/fssai`);
    const fssaiUrl = await getDownloadURL(fssai);
    debugger;*/

   /* var redIconOneimageURL = data?.redIconOneURL;
    if(redIconOne) {
        const redIconOneimageRef =  ref(storage, `postsInter/${data?.slug}-one`);
        await uploadBytes(redIconOneimageRef, redIconOne);
        redIconOneimageURL = await getDownloadURL(redIconOneimageRef);       
    }

    var redIconTwoimageURL = data?.redIconTwoURL;
    if(redIconTwo) {
        const redIconTwoimageRef =  ref(storage, `postsInter/${data?.slug}-two`);
        await uploadBytes(redIconTwoimageRef, redIconTwo);
        redIconTwoimageURL = await getDownloadURL(redIconTwoimageRef);       
    }

    var redIconThreeimageURL = data?.redIconThreeURL;
    if(redIconThree) {
        const redIconThreeimageRef =  ref(storage, `postsInter/${data?.slug}-three`);
        await uploadBytes(redIconThreeimageRef, redIconThree);
        redIconThreeimageURL = await getDownloadURL(redIconThreeimageRef);       
    }

    var redIconFourimageURL = data?.redIconFourURL;
    if(redIconFour) {
        const redIconFourimageRef =  ref(storage, `postsInter/${data?.slug}-four`);
        await uploadBytes(redIconFourimageRef, redIconFour);
        redIconFourimageURL = await getDownloadURL(redIconFourimageRef);
    }*/

    const firestoreRef = doc(db, `postsInter/${data?.id}`)
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
    await deleteDoc(doc(db, `postsInter/${id}`));
}
/*s-delete*/