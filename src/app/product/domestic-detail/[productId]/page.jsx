//"use client";
import dynamic from "next/dynamic";
const AnimatedClientComponent = dynamic(() => import("./AnimatedClientComponent"), {
  ssr: false,
});

import { getPosts } from "@/app/lib/firebase/post/read_server";
import { getAllCategories } from "@/app/lib/firebase/category/read_server";
// import { getAllPosts } from "@/app/lib/firebase/post/read_server";
import { getAllPostsWithCategory } from "@/app/lib/firebase/post/read_server";
/*import { hyphenToSpace } from "@/utils/transformName";
import Link from "next/link";
import Script from 'next/script';
import gsap from "gsap";*/
//import hidesidebar from "@/app/product/domestic/hideSidebar";

export default async function Page({ params }){
  //const hyphenToSpace = (str) => str.replace(/-/g, ' ');
  const { productId } = params;
  const post = await getPosts(productId);
  const matchCateName = await getAllCategories();
  const getAllPost =  await getAllPostsWithCategory(post?.categoryId);
  return <>
  <AnimatedClientComponent post={post} getAllPost={getAllPost} matchCateName={matchCateName} />
  
    {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js" />
    <Script src="/js/panels.js" strategy="afterInteractive" /> */}
    {/* <section className="section product-detail-banner product-detail-banner-footer">
      <div className="product-detail-title">
        <h1 className="text-center">Turmeric<br/>Powder</h1>
      </div>
      <div className="product-large-img"><img src="/images/chilli 2.webp" className="w-100" width="619" height="740" alt="Chilli Powder"/></div>
    </section> */}
  {/* <main>
        <div className="row">
              <div className="col-12 page-title">
                <h1 className="text-center" data-text={'detail'}>
                {post?.name}
                </h1>
              </div>
          </div>
        <h2>Product : {post?.name}</h2>
        <p>slug: {post?.slug} || category Name: <Link href={`/product/domestic/${post?.categoryId}`}>{post?.categoryId}</Link> || page url: {productId}</p>
        <div><img src={post?.productURL} alt=""/> </div>
    </main> */}
</>}