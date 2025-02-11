"use client";

import { useCategories } from "@/app/lib/firebase/event/read";
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
                <th>Sr.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Slug</th>
                <th>Event Date</th>                
                <th>Event Link</th>
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
                    <td>
                        <ul className="event-date">
                            {item?.eventFromDate &&
                                <li><strong>Event From:</strong>
                                    {new Date(item?.eventFromDate).toUTCString().slice(4, -12)}
                                </li>
                            }
                            {!item?.eventFromDate &&
                                <li><strong>Event From:</strong>
                                    -
                                </li>
                            }
                            {item?.eventToDate &&
                                <li><strong>Event To:</strong>
                                    {new Date(item?.eventToDate).toUTCString().slice(4, -12)}
                                </li>
                            }
                            {!item?.eventToDate &&
                                <li><strong>Event To:</strong>
                                    -
                                </li>
                            }
                        </ul>
                         
                        {/* {new Date(new Date(item?.postDate).toUTCString()).getDate() + "-" + (new Date(new Date(item?.postDate).toUTCString()).getMonth() + 1) + "-" + new Date(new Date(item?.postDate).toUTCString()).getFullYear()} */}

                        {/* {new Date(item?.postDate).toUTCString()} */}
                        {
                            //let date = new Date(item?.postDate).toUTCString();
                            // console.log(new Date(new Date(item?.postDate).toUTCString()).getDate() + "-" + (new Date(new Date(item?.postDate).toUTCString()).getMonth() + 1) + "-" + new Date(new Date(item?.postDate).toUTCString()).getFullYear())

                            // console.log(new Date(item?.postDate).toUTCString())
                        }
                    </td>
                    <td>
                        {item?.eventLink}
                    </td>
                    <td>
                        {item?.timestamp.toDate().toLocaleTimeString('en-US', {day:'2-digit', month:'2-digit', year:'numeric'})}                    
                    </td>                    
                    <td><Link href={`/backend/admin/events/form?id=${item?.id}`} className="btn">Edit</Link></td>
                </tr>
            })
        }
        </tbody>
        </table>
    </section>
}