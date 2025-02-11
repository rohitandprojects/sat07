//"use client";
import dynamic from "next/dynamic";
const AboutPage = dynamic(() => import("./AboutPage"), {
  ssr: false,
});
import { getAllCategories } from "@/app/lib/firebase/advertisement/read_server";

export default async function Page(){
  const post = await getAllCategories();
  return <>
	<AboutPage post={post}/>
  </>
}