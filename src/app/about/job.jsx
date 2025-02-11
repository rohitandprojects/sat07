import React from 'react'
import Link from 'next/link';
import ExportedImage from "next-image-export-optimizer";
import { useCategories } from "@/app/lib/firebase/job/read";
const Job = () => {
    const { data, error, isLoading } = useCategories();
  return (
    <>{data?.map((item, key) => {
        return <li><Link key={key} href={item?.link} target="_blank" className="d-block"><ExportedImage src={item?.iconURL} width={359} height={52} alt={item?.name} className="mw-100 h-auto"/></Link></li>
    })}</>
  )
}

export default Job