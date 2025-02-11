"use client";
import { getCategory } from "@/app/lib/firebase/event-exhibition/read";
import { createNewCategory, deleteCategory, updateCategory } from "@/app/lib/firebase/event-exhibition/write";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const CategoryFormContext = createContext();

export default function CategoryFormContextProvider({children}){

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
            await createNewCategory({data: data, image: image});
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
            await updateCategory({data: data, image: image});
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
            await deleteCategory(id);
            setIsDone(true);
            router.push('/backend/admin/event-exhibition');
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
           const res = await getCategory(id);
           if(res.exists()){
            setData(res.data());
           }
           else{
            throw new Error(`No category found from id ${id}`);
           }
        } catch (error) {
            setError(error?.message);
        }
        setIsloading(false);
    }
    /*e-update product*/

    return <CategoryFormContext.Provider
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
    </CategoryFormContext.Provider>
}

export const useCategoryForm = () => useContext(CategoryFormContext);