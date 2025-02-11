//"use client";
import dynamic from "next/dynamic";
const ExportPage = dynamic(() => import("./ExportPage"), {
  ssr: false,
});
import { getAllCategories } from "@/app/lib/firebase/event-exhibition/read_server";
import { getAllCategoriesCarousel } from "@/app/lib/firebase/international-carousel/read_server";
export default async function Page(){
  const post = await getAllCategories();
  const interCarousel = await getAllCategoriesCarousel();
  return <>
	<ExportPage post={post} interCarousel={interCarousel}/>
  </>
}