"use client";

import { useCategoriesAbout } from "@/app/lib/firebase/categoryAbout/read";
import Link from "next/link";

export default function CategoriesAboutListView(){
    const { data, error, isLoading } = useCategoriesAbout();

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
                <th>Link </th>
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
                    <th>{item?.link}</th>
                    <th><Link href={`/backend/admin/categoriesAbout/form?id=${item?.id}`} className="btn">Edit</Link></th>
                </tr>
            })
        } 
        </tbody>
        </table>
    </section>
}