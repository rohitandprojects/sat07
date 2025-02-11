"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";
import { hyphenToSpace } from "@/utils/transformName";
import Sidebar from "../../@sidebar/page";
import LetsConnect from "../../components/letsconnect";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const AnimatedClientComponentBlog = ({ post, matchCateName, postDate }) => {
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
    <section className="section cust-pad-left-right blog-detail-banner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 blog-title">
            <div className="blog-detail-title vh-100 d-flex align-items-center">
              <div className="w-100">
                <h1>{post?.name}</h1>
                <p>{postDate} by Satvamnutrifoods</p>
                {/* {post.timestamp.toDate().toLocaleDateString('en-US', {day:'2-digit', month:'long', year:'numeric'})} */}
              </div>
            </div>
          </div>
        </div>
        <div className="row blog-spacing">
          <div className="col-lg-8 col-md-8 col-sm-8 blog-title">
              <div className="blog-large-img"><ExportedImage src={post?.productURL} className="w-100 h-auto" width={619} height={740} alt={post?.name}/></div>
              {post?.content && <div dangerouslySetInnerHTML={{__html: post?.content}} className="blog-contetns"></div>}
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4"><Sidebar></Sidebar></div>
        </div>
      </div>
    </section>
    <LetsConnect></LetsConnect>
      </>
    );
};
  
  export default AnimatedClientComponentBlog;