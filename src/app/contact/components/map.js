"use client";
import React from 'react'
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Map = () => {
    const map_columnRef = useRef(false);
    const map_boxRef = useRef(false);
    useEffect(() => {
		// Trigger animation on scroll
		gsap.timeline({
			scrollTrigger: {
			trigger: map_columnRef.current,
            start:'top top',
            end: "bottom top",
			pin: true,
            scrub: true,
			markers:false,
		},
		}).to(
			map_boxRef.current,
			{}
		)
        return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
 
	},[]);
  return (    
    <div className="map-box-main" ref={map_columnRef}>
        <div className="map-box" ref={map_boxRef}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5758364459352!2d72.5241871760928!3d23.076007214330637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e834bfa8ffb4d%3A0xaa57bd827c42746a!2sSatvam%20Nutrifoods%20Limited%20-%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1688663938318!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
        />
        </div>
    </div>
  )
}

export default Map