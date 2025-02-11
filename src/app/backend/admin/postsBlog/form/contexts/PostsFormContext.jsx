"use client";
import { getPosts } from "@/app/lib/firebase/postBlog/read";
import { createNewPosts, deletePosts, updatePosts } from "@/app/lib/firebase/postBlog/write";
// import { getCategory } from "@/app/lib/firebase/category/read";
// import { createNewCategory, deleteCategory, updateCategory } from "@/app/lib/firebase/category/write";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const PostsFormContext = createContext();

export default function PostsFormContextProvider({children}){

    const router = useRouter();

    const [data, setData] = useState({});
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);
    const [isDone, setIsDone] = useState(false);
    const [image, setImage] = useState(null);
    const [redIconOne, setRedIconOne] = useState(null);
    const [redIconTwo, setRedIconTwo] = useState(null);
    const [redIconThree, setRedIconThree] = useState(null);
    const [redIconFour, setRedIconFour] = useState(null);

    const handleData = (key, value) => {
        setIsDone(false);
        setData({
            ...data,
            [key]: value
        })
    }

    const handleSKU = (key, name, isChecked) => {
          const getArray = data[key] || [] ; 
          const set = new Set(getArray)
          if(isChecked) {
            set.add(name)
          } else {
            set.delete(name)
          }
         
        setData({
            ...data,
            [key]: [...set]
        })
       setTimeout(() => {
        console.log('data :', data[key]);
       }, 1000);
    }

    const handleCreate = async () => {
        setError(null);
        setIsloading(true);
        setIsDone(false);
        try{
            //TODO : Add data to firebase firestore
            //TODO : image ko stoarage me bhi lena hai
            await createNewPosts({data: data, image: image, redIconOne: redIconOne, redIconTwo: redIconTwo, redIconThree: redIconThree, redIconFour: redIconFour});
            setIsDone(true);
        } catch (error) {
            setError(error?.message);
        }
        setIsloading(false);
    }

    /*s-update product*/
    const handleUpdate = async () => {
        setError(null);
        setIsloading(true);
        setIsDone(false);
        try{
            await updatePosts({data: data, image: image, redIconOne: redIconOne, redIconTwo: redIconTwo, redIconThree: redIconThree, redIconFour: redIconFour});
            setIsDone(true);
        } catch (error) {
            setError(error?.message);
        }
        setIsloading(false);
    }
    /*e-update product*/

    /*s-delete product*/
    const handleDelete = async (id) => {
        setError(null);
        setIsloading(true);
        setIsDone(false);
        try{         
            await deletePosts(id);
            setIsDone(true);
            router.push('/backend/admin/postsBlog');
        } catch (error) {
            setError(error?.message);
        }
        setIsloading(false);
    }
    /*e-delete product*/

    /*s-update product*/    
    const fetchData = async (id) => {
        setError(null);
        setIsloading(true);
        setIsDone(false);
        try{
           const res = await getPosts(id);
           if(res.exists()){
            setData(res.data());
           }
           else{
            throw new Error(`No Post found from id ${id}`);
           }
        } catch (error) {
            setError(error?.message);
        }
        setIsloading(false);
    }
    /*e-update product*/

    return <PostsFormContext.Provider
    value={{
        data,
        isLoading,
        error,
        isDone,
        handleData,
        handleSKU,
        handleCreate,
        handleUpdate,
        handleDelete,
        image, setImage,
        redIconOne,setRedIconOne,
        redIconTwo,setRedIconTwo,
        redIconThree,setRedIconThree,
        redIconFour,setRedIconFour,
        fetchData
    }}
    >
    {children}
    </PostsFormContext.Provider>
}

export const usePostsForm = () => useContext(PostsFormContext);