"use client";

import { useAuthors } from "@/app/lib/firebase/author/read";
//import { useCategories } from "@/app/lib/firebase/category/read";
import Link from "next/link";

export default function AuthorsListView(){
    const { data, error, isLoading } = useAuthors();

    if (isLoading){
        return <p className="loading">Loading...</p>
    }
    if (error){
        return <p className="loading error">Loading...</p>
    }
    if (!data){
        return <p className="loading error">Data not found!</p>
    }
    return <section>
        <table className="table">
            <thead>
            <tr>
                <th>Sr.</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
        {
            data?.map((item, key) => {
                return <tr key={item.name}>
                    <th>{key + 1}</th>
                    <th><div className="product-imgs"><img src={item?.photoURL} width="300" height="300" alt={item?.name}/></div></th>
                    <th>{item?.name}</th>
                    <th>{item?.email}</th>
                    <th><Link href={`/backend/admin/authors/form?id=${item?.id}`} className="btn">Action</Link></th>
                </tr>
            })
        } 
        </tbody>
        </table>
    </section>
}