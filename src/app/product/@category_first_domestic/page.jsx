"use client";
import { useCategories } from "@/app/lib/firebase/category/read";
import Link from 'next/link';

export default function CategoryFirstDomestic({linkName,className}) {
  const { data, error, isLoading } = useCategories();
  if (isLoading) return <Link href={`#`} className={className}>Loading...</Link>
  if (data?.length){
      return <Link href={`/product/domestic/${data[0]?.id}`} className={className}>{linkName}</Link>
  }
}