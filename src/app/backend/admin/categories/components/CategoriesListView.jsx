"use client";

import { useCategories } from "@/app/lib/firebase/category/read";
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
        <table className="table">
            <thead>
            <tr>
                <th>Sr. Test</th>
                <th>Icon</th>
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
                    <th><div className="product-imgs"><img src={item?.iconURL} width="300" height="300" alt={item?.name}/></div></th>
                    <th>{item?.name}</th>
                    <th>{item?.slug}</th>
                    <th>
                        {/* <p>{item?.timestamp.toDate().toString()}</p>
                        <p>{item?.timestamp.toDate().toLocaleTimeString('en-US', {day:'2-digit'})}</p> */}
                        {/* {item?.timestamp.toDate().toLocaleTimeString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})} */}

                        {item?.timestamp.toDate().toLocaleTimeString('en-US', {day:'2-digit', month:'2-digit', year:'numeric'})}
                       {/* <p>{item?.timestamp.toDate().toLocaleTimeString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</p> */}
                        
                        {/* <p></p> */}
                        {/* <p>{item?.timestamp.toDate().toLocaleTimeString('en-US')}</p> */}
                    </th>
                    <th><Link href={`/backend/admin/categories/form?id=${item?.id}`} className="btn">Edit</Link></th>
                </tr>
            })
        }
        </tbody>
        </table>
    </section>
}