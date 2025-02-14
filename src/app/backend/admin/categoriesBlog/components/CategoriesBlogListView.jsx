"use client";

import { useCategoriesBlog } from "@/app/lib/firebase/categoryBlog/read";
import Link from "next/link";

export default function CategoriesBlogListView(){
    const { data, error, isLoading } = useCategoriesBlog();

    if (isLoading){
        return <p className="loading">Loading...</p>
    }
    if (error){
        return <p className="loading error">error...</p>
    }
    if (!data){
        return <p className="loading error">Data not found!</p>
    }
    return <section>
        <table className="table">
            <thead>
            <tr>
                <th>Sr.</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Date</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
        {
            data?.map((item, key) => {
                return <tr key={item.name}>
                    <th>{key + 1}</th>
                    <th>{item?.name}</th>
                    <th>{item?.slug}</th>
                    <th>{item?.timestamp.toDate().toLocaleTimeString('en-US', {day:'2-digit', month:'2-digit', year:'numeric'})}</th>
                    <th><Link href={`/backend/admin/categoriesBlog/form?id=${item?.id}`} className="btn">Edit</Link></th>
                </tr>
            })
        } 
        </tbody>
        </table>
    </section>
}