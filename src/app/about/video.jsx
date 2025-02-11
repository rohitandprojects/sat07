"use client";
import { useCategoriesAbout } from "@/app/lib/firebase/categoryAbout/read";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExportedImage from "next-image-export-optimizer";
import Link from 'next/link';
import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";  // Import the Fancybox styles

gsap.registerPlugin(ScrollTrigger);

export default function VideoAbout() {
  
    const aboutVideoWrapRef = useRef(null);
    const aboutVideoImgRef = useRef(null);
    useEffect(() => {
      Fancybox.bind("[data-fancybox]", {
        // Fancybox configuration can be added here if needed
      });
        gsap.timeline({
			scrollTrigger: {
			  trigger: aboutVideoWrapRef.current,
			  start:'top bottom',
			end:'bottom top',
			  scrub:1,
			},
		  }).fromTo(
			aboutVideoImgRef.current,
			{ y:'-30%' },
			{ y:'5%', duration:1.5, ease: "sine.out"}
		  );
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        Fancybox.destroy();
      };
    },[])
    const { data, error, isLoading } = useCategoriesAbout();
    return <><section className="about-video position-relative">
    <div className="about-video-div position-relative">
        <div className="about-video-sub position-absolute">
              {data?.map((post, key) => {
                //return <div key={key}>{post.id}</div>
                 return <Link key={key} href={post.id === 'corporate-video' ? post.link : "#" } className={post.id === 'corporate-video' ? "video-link position-absolute" : "d-none"} data-fancybox="" data-custom-class="my-youtube">{post.id === 'corporate-video' && <img src="/images/polygon.svg" width={100} height={100} alt="about" />}</Link>               
              })} 
            {/* <Link href={''} className="video-link position-absolute" data-fancybox data-custom-class="my-youtube"><img src="/images/polygon.svg" width={100} height={100} alt="about" /></Link> */}
            <div className="about-video-img overflow-hidden" ref={aboutVideoWrapRef}><ExportedImage src="/images/about-video.webp" ref={aboutVideoImgRef} width={1450} height={700} alt="about" className="imgReveal w-100 h-auto"/></div>
        </div>
    </div>
</section>
</>
}


