"use client";

import { usePosts } from "@/app/lib/firebase/postBlog/read";
import { hyphenToSpace } from "@/utils/transformName";
//import { useCategories } from "@/app/lib/firebase/category/read";
import Link from "next/link";

export default function PostsListView({matchCateName}){
    const { data, error, isLoading } = usePosts();
    
    if (isLoading){
        return <p className="loading">Loading...</p>
    }
    if (error){
        return <p className="loading error">Loading...</p>
    }
    if (!data){
        return <p className="loading error">Data not found!</p>
    }
    return <table className="table admin-blog-post">
            <thead>
            <tr>
                <th>Sr.</th>
                <th>Product</th>
                <th>Product Title</th>
                <th>Slug(URL)</th>
                <th>Category</th>
                <th>Slogan</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
        {
            data?.map((item, key) => {
                return  <><tr key={item.name}>
                    <td>{key + 1}</td>
                    <td>
                        <div className="product-imgs"><img src={item?.productURL} width="300" height="300" alt={item?.name}/></div>
                        <div className="w-100 timestamp-div">
                            <p>Created Date</p>
                            <p>{item?.timestamp.toDate().toLocaleDateString('en-US', {day:'2-digit', month:'2-digit', year:'numeric'})}</p>
                            <p>{item?.timestamp.toDate().toLocaleTimeString('en-US', {hour:'2-digit',minute:'2-digit',second:'2-digit'})}</p>
                        </div>
                    </td>
                    <td>{item?.name}</td>
                    <td className="text-break">{item?.slug}</td>
                    <td className="catename-slug">
                        {matchCateName?.map((cateName, key) => {
                            return <>{(cateName?.id == item?.categoryId) && <p key={key}><span>Name:</span><strong>{cateName?.name}</strong></p>}</>
                        })}
                        <p><span>id:</span>{item?.categoryId}</p>
                    </td>
                    <td><div className="admin-blog-content">{item?.content && <div dangerouslySetInnerHTML={{__html: item?.content}} className="font10"></div>}</div></td>
                    <td>
                        <Link href={`/backend/admin/postsBlog/form?id=${item?.id}`} className="btn">EDIT</Link>
                        {/* {!item?.content4 && <Link href={`/backend/admin/postsBlog/form?id=${item?.id}`} className="btn">EDIT</Link>}
                        {item?.content4 && <Link href={`/backend/admin/postsBlog/form2?id=${item?.id}`} className="btn">EDIT</Link>} */}
                    </td>
            </tr>
           </> 
            })
        } 
        </tbody>
        </table>
}