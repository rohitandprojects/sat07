"use client";
import useCollectionCount from "@/app/lib/firebase/count"
import Link from "next/link";

export default function CountCard({path, name, url }){
    const { data, isLoading, error } = useCollectionCount({ path: path })
    if(isLoading){
        return <div className="col-lg-3 col-md-3 col-sm-3"><div className="dashboard-card">Loading...</div></div>
    }
    if(error){
        return <p>{error}</p>
    }
    return <div className="col-lg-3 col-md-3 col-sm-3">
        <div className="dashboard-card">
            <h2>{data}</h2>
            <h3>{name}</h3>
            <Link href={url}>View More</Link>
        </div>
    </div>
}