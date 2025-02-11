"use client";
import { useCategories } from "@/app/lib/firebase/category/read";
import Link from 'next/link';

export default function FirstDomesticCategory({linkName,className}) {
  const { data, error, isLoading } = useCategories();
  if (isLoading) return <div className="domestic-international-title position-absolute"><h2 className={className}>Loading...</h2></div>
  if (data?.length){
      return <><div className="domestic-international-title position-absolute"><h2>{linkName}</h2></div><Link href={`/product/domestic/${data[0]?.id}`} className={className}></Link></>
  }
}