"use client";

import { useCategories } from "@/app/lib/firebase/job/read";
import Link from "next/link";

export default function CategoriesListView(){
    const { data, error, isLoading } = useCategories();

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
        <table className="table job-table">
            <thead>
            <tr>
                <th>Sr.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Link</th>
                <th>Posted Date</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
        {
            data?.map((item, key) => {
                return <tr key={item.name}>
                    <td>{key + 1}</td>
                    <td><div className="product-imgs"><img src={item?.iconURL} width="300" height="300" alt={item?.name}/></div></td>
                    <td>{item?.name}</td>
                    <td>{item?.slug}</td>
                    <td style={{wordBreak:'break-all'}}>{item?.link}</td>
                    <td>
                        {item?.timestamp.toDate().toLocaleTimeString('en-US', {day:'2-digit', month:'2-digit', year:'numeric'})}                    
                    </td>
                    <td><Link href={`/backend/admin/job/form?id=${item?.id}`} className="btn">Edit</Link></td>
                </tr>
            })
        }
        </tbody>
        </table>
    </section>
}