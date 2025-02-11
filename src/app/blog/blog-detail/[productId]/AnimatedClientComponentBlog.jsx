"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import { hyphenToSpace } from "@/utils/transformName";
// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const AnimatedClientComponentBlog = ({ post, matchCateName }) => {
    // const titleMainRef = useRef(null);
    // const productMainRef = useRef(null);
    // const productImgRef = useRef(null);
    // const productContainerRef = useRef(null);
    useEffect(() => {
        window.scrollTo(0, 0);
        
      // Cleanup function to kill scroll triggers on component unmount
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }, [post]);
  
    return (
      <>

  {/* {matchCateName?.map((cateName, key) => {
    return <div key={key} className="learn-more-div position-fixed pf-left">{(cateName?.id == post?.categoryId) && <Link className="view-job-offers-link position-relative" href={`/product/international/${post?.categoryId}`}>Back to {cateName?.name}</Link>}</div>
  })} */}
    <section className="section blog-detail-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="blog-detail-title">
              <h1 className="text-center" data-text={'detail'}>{post?.name}</h1>
            </div>
            <div className="blog-large-img"><ExportedImage src={post?.productURL} className="w-100 h-auto" width={619} height={740} alt={post?.name}/></div>
            {post?.content && <div dangerouslySetInnerHTML={{__html: post?.content}} className="dishes-memorable btmToTp"></div>}
          </div>
        </div>
      </div>
    </section>
      </>
    );
};
  
  export default AnimatedClientComponentBlog;