"use client";
import { useEffect, useState, useRef } from "react";
import TvcFilm from "./carousels/tvc"; 
import Events from './carousels/events';
import ModelComponent from '../b2b/components/model';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Outdoors from "./carousels/outdoors";
import SocialMedia from '@/app/components/social';
import Social from "./carousels/social";
gsap.registerPlugin(ScrollTrigger);

const Media = () => {	
	const mediaReveal = useRef(false);
  const letsConnectRef = useRef(null);
  useEffect(() => {
    	// Trigger a class name change on scro
		window.scrollTo(0, 0);
		ScrollTrigger.create({
			trigger: mediaReveal.current,
			start:'top center',
			end:'bottom top',
			onEnter() {
				mediaReveal.current.classList.add('transition_media');				
				},
				onLeave() {
					//worldMapRef.classList.add('dropping_leave');
				},
				onEnterBack() {
					//worldMapRef.classList.remove('dropping_leave');
				},
				onLeaveBack() {
					const transition_media_class = document.querySelector(".transition_media");
					if(transition_media_class){
						mediaReveal.current.classList.remove('transition_media');
					}		
				}
		});
		setTimeout(function(){	
		// Trigger a class name change on scroll
		ScrollTrigger.create({
			trigger:letsConnectRef.current,
			start: 'top 68%', 
	  		end: 'bottom top',
			onEnter() {
				letsConnectRef.current.classList.add('reveal');				
				},
				onLeave() {
					//worldMapRef.classList.add('dropping_leave');
				},
				onEnterBack() {
					//worldMapRef.classList.remove('dropping_leave');
				},
				onLeaveBack() {
					const domestic_international_class = document.querySelector(".domestic-international");
					if(domestic_international_class){
						letsConnectRef.current.classList.remove('reveal');
					}		
				}
		});
	},2000)
   		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	},[]);
  return (
    <>
        <section className="section min-height100 d-flex align-items-center justify-content-center banner-main media-banner cust-pad-left" ref={mediaReveal}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<h1 className="d-flex"><div className="m-title">M</div><div className="m-title">e</div><div className="m-title">d</div><div className="m-title">i</div><div className="m-title">a</div><span className="m-title">.</span></h1>
					</div>
				</div>
			</div>
		</section>
		<section className="section mediatvc min-height100 d-flex align-items-center cust-pad-left">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-4">
						<h2 className="btmToTp">TVC and<br/> Corporate Film</h2>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-8">
						<TvcFilm></TvcFilm>
					</div>
				</div>
			</div>
		</section>
		<section className="section event-media mediatvc min-height100 d-flex align-items-center cust-pad-left">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-4">
						<h2 className="btmToTp">Events</h2>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-8">
						<Events></Events>
					</div>
				</div>
			</div>
		</section>
		<section className="section mediatvc min-height100 d-flex align-items-center cust-pad-left">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-4 col-md-4 col-sm-4">
						<h2 className="btmToTp">Outdoors</h2>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-8">
						<Outdoors></Outdoors>
					</div>
				</div>
			</div>
		</section>
		<div className="overflow-hidden">
		<section className="section cust-pad-left-right we-are-social d-flex align-items-center">
			<div className="container-fluid">
				<div className="row position-relative">
					<div className="col-12">
						<h1 className="text-center text-uppercase btmToTp">#satvamnutrifoods<br/>
							We are Social</h1>
						<h5 className="text-center btmToTp2">SHARE WITH YOUR <span>FRIENDS</span></h5>
					</div>
				</div>
				<div className='media-social position-relative'>
					<SocialMedia></SocialMedia>
				</div>
				<Social></Social>
			</div>
		</section>
		<section className="domestic-international position-relative pt-0 overflow-visible">			
			<div className="container-fluid position-relative" ref={letsConnectRef}>
				<div className="lets-connect position-absolute">
					<div className="satvam-circle"><h1><span>Let's</span>Connect.</h1></div>
				</div>
				<div className="row">
					<ModelComponent></ModelComponent>
				</div>
			</div>	
		</section>
		</div>
    </>
  )
}

export default Media