"use client";
import { useCategories } from "@/app/lib/firebase/social/read";
import { useEffect } from "react";
import Link from 'next/link';
import ExportedImage from "next-image-export-optimizer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, A11y } from 'swiper/modules';
import { Fancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";  // Import the Fancybox styles
import Loading from "@/app/components/Loader";
/*import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";*/

export default function Social() {
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {
            // Fancybox configuration can be added here if needed
        });
        return () => {
            //ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            Fancybox.destroy();
          };
    },[])
  const { data, error, isLoading } = useCategories();
  if (isLoading) return <div className="loadidng-media"><Loading></Loading></div>
  if (data?.length){
    return <div className="row media-social-row btmToTp">
        {data?.map((category, index) =>{
            return (     
                <div className="col-lg-4 col-md-4 col-sm-4" key={index}>
                    <div className="media-social-box">
                        <Link href={category?.iconURL} data-fancybox="social">
                            <div className="media-social-img"><ExportedImage src={category?.iconURL} width={500} height={500} alt="social"/></div>
                        </Link>
                    </div>
                </div>
            )
        })}
  </div>
  }
}