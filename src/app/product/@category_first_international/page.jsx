"use client";
/*import { useCategories } from "@/app/lib/firebase/categoryInter/read";
import Link from 'next/link';

export default function CategoryFirstInternational({linkName,className}) {
  const { data, error, isLoading } = useCategories();
  if (isLoading) return <Link href={`#`} className={className}>Loading...</Link>
  if (data?.length){
      return <Link href={`/product/international/${data[0]?.id}`} className={className}>{linkName}</Link>
  }
}*/

import { useCategoriesInter } from "@/app/lib/firebase/categoryInter/read";
import Link from 'next/link';

export default function CategoryFirstDomestic({linkName,className}) {
  const { data, error, isLoading } = useCategoriesInter();
  if (isLoading) return <Link href={`#`} className={className}>Loading...</Link>
  if (data?.length){
      return <Link href={`/product/international/${data[0]?.id}`} className={className}>{linkName}</Link>
  }
}

 