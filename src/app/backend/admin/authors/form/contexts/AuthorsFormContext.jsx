"use client";
import { getAuthors } from "@/app/lib/firebase/author/read";
import { createNewAuthors, deleteAuthors, updateAuthors } from "@/app/lib/firebase/author/write";
//import { getCategory } from "@/app/lib/firebase/category/read";
//import { createNewCategory, deleteCategory, updateCategory } from "@/app/lib/firebase/category/write";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const AuthorsFormContext = createContext();

export default function AuthorsFormContextProvider({children}){

    const router = useRouter();

    const [data, setData] = useState({});
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);
    const [isDone, setIsDone] = useState(false);
    const [image, setImage] = useState(null);

    const handleData = (key, value) => {
        setIsDone(false);
        setData({
            ...data,
            [key]: value
        })
    }

    const handleCreate = async () => {
        setError(null);
        setIsloading(true);
        setIsDone(false);
        try{
            //TODO : Add data to firebase firestore
            //TODO : image ko stoarage me bhi lena hai
            await createNewAuthors({data: data, image: image});
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
            await updateAuthors({data: data, image: image});
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
            await deleteAuthors(id);
            setIsDone(true);
            router.push('/backend/admin/authors');
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
           const res = await getAuthors(id);
           if(res.exists()){
            setData(res.data());
           }
           else{
            throw new Error(`No Authors found from id ${id}`);
           }
        } catch (error) {
            setError(error?.message);
        }
        setIsloading(false);
    }
    /*e-update product*/

    return <AuthorsFormContext.Provider
    value={{
        data,
        isLoading,
        error,
        isDone,
        handleData,
        handleCreate,
        handleUpdate,
        handleDelete,
        image, setImage,fetchData
    }}
    >
    {children}
    </AuthorsFormContext.Provider>
}

export const useAuthorsForm = () => useContext(AuthorsFormContext);