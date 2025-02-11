"use client";
//import ExportedImage from "next/image";
//import ImageNext from "next/image";
import ExportedImage from "next-image-export-optimizer";
import Nitrogensvg from "./components/nitrogen-svg";
// import styles from "./page.module.css";
//import styles from '../styles/satvam.scss';
/*
import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);*/
/*import { useGSAP } from "@gsap/react";*/
import { gsap } from "gsap";
/*import { useGSAP } from "@gsap/react";*/
import { ScrollTrigger } from "gsap/ScrollTrigger";
/*gsap.registerPlugin(useGSAP,ScrollTrigger);*/
import React, {useEffect} from 'react';
const imageLoader = ({ quality }) => {
	return `${quality || 78}`
  }
export default function Home() {	 
	useEffect(()=>{
		gsap.registerPlugin(ScrollTrigger);
		const sceneOne = gsap.timeline();

		window.scrollTo(0, 0);
		let ww = window.innerWidth;
		//let wh = window.innerHeight;
		 

		let gm_flag = 1;
		var cryogenic = document.querySelector(".cryogenic-mill");
		const video = document.getElementById("traditional_vid");
		var grandma_var = document.querySelector(".grandma");
		var explore = document.querySelector(".lets-explorer");

		function playGrandma(param1, param2){
			//console.log("Enter");	
			if (gm_flag === 1) {
				//console.log("play");	
				grandma_var.classList.remove('paused');		
				gm_flag = 2;
			}
			else{
				grandma_var.classList.add('paused');
				gm_flag = 1;
				//console.log("Out");
			}
		}

		
		/* traditional_video = document.querySelector(".traditional_vid");
		var traditional_vid = document.getElementById("traditional_vid"); */
		let wh = window.innerHeight;
		//let half_wh = wh/2;
		
		// const sceneOne = gsap.timeline({
		// 	scrollTrigger: {        
		// 	trigger: '.scene-one', 
		// 	start: 'top top',
		// 	end: '+=30000', 
		// 	pin: true,
		// 	scrub: true,
		// 	markers:false,
		// 	}
		// });
		sceneOne.to('.title-one', { duration:5,ease: "power1.inOut", top:'100%',delay:0});
		sceneOne.to('.s1l-tree', { duration:5,ease: "power1.inOut", xPercent:-100,delay:-5}); 
		sceneOne.to('.s1r-tree', { duration:5,ease: "power1.inOut", xPercent:100,delay:-5});
		
		sceneOne.to('.s1l-grass', { duration:8,ease: "power1.inOut", xPercent:-100,delay:-5});
		sceneOne.to('.s1r-grass', { duration:8,ease: "power1.inOut", xPercent:100,delay:-8});
	
		sceneOne.to('.s1l-leaves', { duration:8.5,ease: "power1.inOut", xPercent:-100, yPercent:20,delay:-7.9});
		sceneOne.to('.s1r-leaves', { duration:8.25,ease: "power1.inOut", xPercent:100,yPercent:35,delay:-8});
	
		sceneOne.to('.house-grandma,.grandma', { duration:3,ease: "power1.inOut",'-webkit-filter':'blur(' + 0 + 'px' + ')',delay:-9}).call(playGrandma, ['rohit', 'dubariya'], ">-1");
		if(ww > 767){
			sceneOne.to('.scene1-house', { duration:6,ease: "power1.inOut",scale:3,delay:-5.5});
			//console.log('> 768');
		}
		else{
			sceneOne.to('.scene1-house', { duration:6,ease: "power1.inOut",scale:3,delay:-5.5});
			//console.log('< 768');
		}
		//sceneOne.to('.grandma', { duration:10,ease: "power1.inOut",scale:5,delay:-5.5});
	
		
		if(ww > 767){
			sceneOne.to('.chilli-powder', { duration:6,ease: "power1.inOut",top:0,delay:-1});
			//console.log('> 768');
		}
		else{
			sceneOne.to('.chilli-powder', { duration:6,ease: "power1.inOut",top:0,delay:-1});
			//console.log('< 768');
		}
		sceneOne.to('.title-two', { duration:5,ease: "power1.inOut",top:0,delay:-5});
		sceneOne.to('.title-two .pipe', { duration:5,ease: "power1.inOut",top:'calc(100% + 50px)',delay:-4});
		
		sceneOne.to('.chilli-powder', { duration:5,ease: "power1.inOut",top:'calc(100% + 200px)',delay:0},'chilliMill').call(playGrandma, ['rohit', 'dubariya'], "<-3.25");
		sceneOne.to('.traditional-mill', { duration:0,ease: "power1.inOut",left:'0%',delay:0},'chilliMill').call(playPauseMill, ['rohit', 'dubariya'], "<");
		sceneOne.to('.title-two', { duration:5,ease: "power1.inOut",top:'100%',delay:-5});
		sceneOne.to('.title-two .pipe', { duration:5,ease: "power1.inOut",top:'150%',delay:-4.25});
		/*sceneOne.to('.dhanajiru-powder', { duration:8,ease: "power1.inOut",left:'0%',delay:0},'dhanajiru_vid').call(playPauseMill, ['rohit', 'dubariya'], ">");*/
		if(ww > 767){
			sceneOne.to('.dhanajiru-powder', { duration:5,ease: "power1.inOut",left:'calc(0% - 200px)',delay:-1.5});
			//console.log('> 768');
		}
		else{
			sceneOne.to('.dhanajiru-powder', { duration:5,ease: "power1.inOut",left:'calc(0% - 100px)',delay:-1.25});
			//console.log('< 768');
		}
		
		sceneOne.to('.traditional-mill', { duration:0,ease: "power1.inOut",left:'100%',delay:0},'dhanajiru_vid').call(playPauseMill, ['rohit', 'dubariya'], "<");
	
		sceneOne.to('.title-three-one', { duration:5.5,ease: "power1.inOut",left:'0%',delay:-4.75});
		sceneOne.to('.title-three-two', { duration:5,ease: "power1.inOut",bottom:'0%',delay:-2});
		sceneOne.to('.title-three-two .pipe', { duration:4.5,ease: "power1.inOut",bottom:'calc(100% + 20px)',delay:-3.5});
		sceneOne.to('.title-three-one', { duration:4,ease: "power1.inOut",top:'100%',delay:-4});
		sceneOne.to('.title-three-two', { duration:5,ease: "power1.inOut",bottom:'100%',delay:0});
		sceneOne.to('.dhanajiru-powder', { duration:5,ease: "power1.inOut",left:'100%',delay:-3.5},'cryogenicMill');
		sceneOne.to('.cryogenic-mill', { duration:0,ease: "power1.inOut",left:'0%',delay:-5.1},'cryogenicMill').call(playPauseCryogenic, ['rohit', 'dubariya'], "<");
	
		sceneOne.to('.crayogenic-graiding', { duration:5,ease: "power1.inOut",top:'-100%',delay:0.5},'graiding').call(playPauseCryogenic, ['om', 'naam'], ">-2");
		sceneOne.to('.crayogenic-graiding_stand', { duration:5,ease: "power1.inOut",top:'100%',delay:0.5},'graiding');
	
		sceneOne.to('.nozel', { duration:5,ease: "power1.inOut",top:'0%',delay:-5.5},'nozel');
		sceneOne.to('.box-masala', { duration:5,ease: "power1.inOut",top:'0%',delay:-5.5},'nozel');
		sceneOne.to('.belt-strip', { duration:5,ease: "power1.inOut",top:'0%',delay:-5.5},'nozel');
		sceneOne.to('.cryogenic-mill-overlay', { duration:0,ease: "power1.inOut",left:'0%',delay:-5},'nozel');
		sceneOne.to('.cryogenic-mill-overlay', { duration:5,ease: "power1.inOut",opacity:1,delay:-5},'nozel');

		let mill_flag = 1,mill_flag2 = 1,explore_flag = 1;
		function playPauseMill(param1, param2) {
			if(mill_flag === 1){
				//console.log('play traditional');			
				video.play();
				mill_flag =2;
			}
			else{
				//console.log('pause traditional');
				video.pause();
				//videos.pause();
				mill_flag =1;
			}
		}
		let dhanajiruLeft,dhanajiruInterval;
		let dhanajiruPowder = document.querySelector('.dhanajiru-powder');
		let thermometer = document.querySelector('.thermometer');
		function setColor(){
			dhanajiruLeft = dhanajiruPowder.getBoundingClientRect().left;	
			if(dhanajiruLeft > (ww/2)){
				if(thermometer){
					thermometer.classList.add('active');
					clearInterval(dhanajiruInterval);
				}
				//console.log('thermometer: active');
			}
		}

		function playPauseCryogenic(param1, param2) {
			dhanajiruInterval = setInterval(setColor, 1000);
			
			if(mill_flag2 == 1){
				//console.log('play cryogenic');
				if(cryogenic){
					cryogenic.classList.add('active');
				}
				//traditional_vid.play();
				mill_flag2 =2;
			}
			else{
				//console.log('pause cryogenic');
				if(cryogenic){
					cryogenic.classList.remove('active');
				}
				if(thermometer){
					thermometer.classList.remove('active');
				}
				clearInterval(dhanajiruInterval);
				//traditional_vid.pause();
				mill_flag2 =1;
			}
			//console.log('cryogenic: '+ param1, param2);
		}
		function explorerClass(param1, param2) {
			if(explore_flag == 1){
				//console.log('explore link active');
				explore.classList.add('active');
				explore_flag =2;
			}
			else{
				//console.log('explore link deactive');
				explore.classList.remove('active');
				explore_flag =1;
			}
			//console.log('cryogenic: '+ param1, param2);
		}
		let scrollImages = (canvasId, texts, imageFolder) => {
			ScrollTrigger.matchMedia({
			// desktop text timeline
			"(min-width: 800px)": function () {
			},
			// mobile text timeline
			"(max-width: 799px)": function () {
			},
			all: function () {
				const canvasIdWithoutHash = canvasId.substring(1);
				const canvas = document.getElementById('fallingPowder');
				const canvas2 = document.getElementById('fallingPowder2');
				const context = canvas.getContext("2d");
				const context2 = canvas2.getContext("2d");
				canvas.width = 255;
				canvas.height = 390;
				canvas2.width = 255;
				canvas2.height = 390;
				const frameCount = 43;
			const currentFrame = index => (
				`slides/nozel/${(index + 1).toString().padStart(0, '0')}.webp`
			);      
				const images = [];
				const products = {
				frame: 0
				};
				const products2 = {
				frame: 0
				};
				for (let i = 0; i < frameCount; i++){
				const img = new Image();
				img.src = currentFrame(i);
				images.push(img);
				}
				sceneOne.to(products,{
				duration:2,
				frame: frameCount - 1,
				snap: "frame",
				onUpdate: render,
				delay:0,
				onComplete(){
					//console.log('each el done')
				},
				}, ">");
				sceneOne.to('.box-masala-subsub', { duration:4,ease: "power1.inOut",left:'0%',delay:1},'boxBelt');
				sceneOne.to('.belt-strip-subsub', { duration:4,ease: "power1.inOut",left:'-200%',delay:1},'boxBelt');
				sceneOne.to(products2, {
				duration:2,
				frame: frameCount - 1,
				snap:"frame",
				onUpdate:render,
				delay:0
				});
				sceneOne.to('.tumeric-powder', { duration:4,ease: "power1.inOut",top:'0%',delay:0});
				sceneOne.to('.tumeric-powder-img', { duration:4,ease: "power1.inOut",top:'-200px',delay:-4});
				sceneOne.to('.tumeric-powder-content', { duration:0,ease: "power1.inOut",y:'22vh',delay:-3});
				sceneOne.to('.tumeric-powder-content h3', { duration:4,ease: "power2.inOut",y:'0vh',delay:-3});
				sceneOne.to('.tumeric-powder-content h2', { duration:4,ease: "power2.inOut",y:'0vh',delay:-3.5});
				sceneOne.to('.home-footer img', { duration:4,ease: "power2.inOut",y:'0vh',opacity:1,delay:-5});	  
				/*sceneOne.to('.tumeric-powder-img', { duration:3,ease: "power1.inOut",top:'-200px',delay:0});*/
				sceneOne.to('.tumeric-base-white', { duration:3,ease: "power1.inOut",opacity:1,delay:-1});
				sceneOne.to('.tumeric-powder-content', { duration:3,ease: "power1.inOut",y:'0vh',delay:-0.5},'titleProduct');
				sceneOne.to('.lets-explorer .satvam-circle', { duration:1,ease: "power1.inOut",opacity:1,rotationX:'0deg',rotateY:'0deg',scale:1,perspective:'100px',delay:1},'titleProduct').call(explorerClass, ['rohit', 'dubariya'], ">-0.5");			
				sceneOne.set({},{},"+=1");
				images[0].onload = render;
				function render() {
				context.clearRect(0, 0, canvas.width, canvas.height);
				context2.clearRect(0, 0, canvas2.width, canvas2.height);
				context.drawImage(images[products.frame], 0, 0, canvas.width, canvas.height);
				context2.drawImage(images[products2.frame], 0, 0, canvas2.width, canvas2.height);
				if (products.frame){
				}
				}
			}
			});
		};
		scrollImages(
			"#product-ezgif",
		);
		ScrollTrigger.create({
			animation: sceneOne,
			trigger: '.trigger', // Use any trigger you prefer
			pin: true,
			start: 'top top', // Trigger animation when the top of the trigger element reaches the center of the viewport
			end: '+=25000', // +=45000 Trigger animation when the bottom of the trigger element reaches the center of the viewport
			scrub: true, // Smoothly animate when scrolling
			markers: false, // Enable debug markers
		});
		// Dispose the ScrollTrigger on component unmount
		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill());
		};
	}); //,[] Run once on component mount
  return (
      <section className="section wh-100 trigger scene-one">
          <div className="scene1-house position-absolute w-100">
				{/* <ExportedImage src="/slides/scene1-house.webp" width={1920} height={1080} className="position-absolute house-grandma" alt="house" />*/}
				<picture>
					<source media={`(max-width: 575px)`} srcSet="/slides/scene1-house-m.webp" />
					<source media={`(min-width: 576px)`} srcSet="/slides/scene1-house.webp"/>
					<ExportedImage loader={imageLoader} src="/slides/scene1-house.webp" className="position-absolute house-grandma" width={1920} height={1080} alt="house" />
           		</picture>
				{/* <div className="grandma paused position-absolute"></div> */}
				<div className="square position-absolute">
					<div className="square-sub">
					<div className="grandma-shadow position-absolute"></div>
						<div className="grandma paused position-absolute"></div>
					</div>
				</div>
		</div>
          {/* <div className="grandma-main position-absolute"></div> */}
		<div className="s1l-leaves position-absolute w-100">
			{/* <img src="slides/scene1-left-leaves.webp" className="position-absolute" alt="leaves" /> */}
			<picture>
				<source media={`(max-width:575px) and (orientation:portrait)`} srcSet="/slides/scene1-left-leaves-m.webp" />
				<source media={`(min-width:576px) and (orientation:landscape)`} srcSet="/slides/scene1-left-leaves.webp"/>
				<ExportedImage src="/slides/scene1-left-leaves.webp" className="position-absolute" width={1920} height={1080} alt="leaves" />
			</picture>
		</div>
		<div className="s1l-grass position-absolute w-100">
			{/* <img src="slides/scene1-left-grass.webp" className="position-absolute" alt="grass" /> */}
			<picture>
				<source media={`(max-width: 575px) and (orientation:portrait)`} srcSet="/slides/scene1-left-grass-m.webp" />
				<source media={`(min-width: 576px) and (orientation:landscape)`} srcSet="/slides/scene1-left-grass.webp"/>
				<ExportedImage src="/slides/scene1-left-grass.webp" className="position-absolute" width={1920} height={1080} alt="grass" />
			</picture>
		</div>
		<div className="s1l-tree position-absolute w-100">
			{/* <img src="slides/scene1-left-tree.webp" className="position-absolute" alt="tree" /> */}
			<picture>
				<source media={`(max-width: 575px) and (orientation:portrait)`} srcSet="/slides/scene1-left-tree-m.webp" />
				<source media={`(min-width: 576px) and (orientation:landscape)`} srcSet="/slides/scene1-left-tree.webp"/>
				<ExportedImage src="/slides/scene1-left-tree.webp" className="position-absolute" width={1920} height={1080} alt="tree" />
			</picture>
		</div>
		<div className="s1r-leaves position-absolute w-100">
			{/* <img src="slides/scene1-right-leaves.webp" className="position-absolute" alt="leaves" /> */}
			<picture>
				<source media={`(max-width: 575px) and (orientation:portrait)`} srcSet="/slides/scene1-right-leaves-m.webp" />
				<source media={`(min-width: 576px) and (orientation:landscape)`} srcSet="/slides/scene1-right-leaves.webp"/>
				<ExportedImage src="/slides/scene1-right-leaves.webp" className="position-absolute" width={1920} height={1080} alt="leaves" />
			</picture>
		</div>
		<div className="s1r-grass position-absolute w-100">
			{/* <img src="slides/scene1-right-grass.webp" className="position-absolute" alt="grass" /> */}
			<picture>
				<source media={`(max-width: 575px) and (orientation:portrait)`} srcSet="/slides/scene1-right-grass-m.webp" />
				<source media={`(min-width: 576px) and (orientation:landscape)`} srcSet="/slides/scene1-right-grass.webp"/>
				<ExportedImage src="/slides/scene1-right-grass.webp" className="position-absolute" width={1920} height={1080} alt="grass" />
			</picture>
		</div>
		<div className="s1r-tree position-absolute w-100">
			{/* <img src="slides/scene1-right-tree.webp" className="position-absolute" alt="tree" /> */}
			<picture>
				<source media={`(max-width: 575px) and (orientation:portrait)`} srcSet="/slides/scene1-right-tree-m.webp" />
				<source media={`(min-width: 576px) and (orientation:landscape)`} srcSet="/slides/scene1-right-tree.webp"/>
				<ExportedImage src="/slides/scene1-right-tree.webp" className="position-absolute" width={1920} height={1080} alt="tree" />
			</picture>
		</div>
          <div className="scene-one_content title-one w-100 position-absolute">
			<div className="scene-one_content-sub position-absolute">
				<h2>Do you remember the natural taste & aroma of freshly ground spices from your grandma's kitchen?</h2>
				<div className="pipe scene1-pipe"></div>
			</div>
		</div>
          <div className="traditional-mill w-100 position-absolute">
			<video className="traditional_vid" id="traditional_vid" src="/video/traditional-machine.mp4" loop playsInline={false} preload="auto" muted={true}></video>
		</div>
        <div className="chilli-powder w-100 position-absolute">
			{/* <img src="slides/chilli-powder.webp" className="position-absolute" alt="chilli" /> */}
			<picture>
				<source media={`(max-width: 767px) and (orientation:portrait)`} srcSet="/slides/chilli-powder-m.webp" />
				<source media={`(min-width: 768px) and (orientation:portrait)`} srcSet="/slides/chilli-powder-tablet.webp" />
				<source media={`(min-width: 768px) and (orientation:landscape)`} srcSet="/slides/chilli-powder.webp"/>
				<ExportedImage src="/slides/chilli-powder.webp" className="position-absolute" width={1920} height={1080} alt="chilli" />
			</picture>
		</div>
		<div className="scene-one_content title-two w-100 position-absolute">
			<div className="scene-one_content-sub position-absolute">
				<h2>Where spices were<br/> hand-smashed</h2>
				<div className="pipe scene1-pipe"></div>
			</div>
		</div>					
		<div className="dhanajiru-powder w-100 position-absolute">
			<div className="dhanajiru-powder-holder position-absolute">
				{/* <img src="slides/dhanajiru.webp" className="position-absolute" alt="dhanajiru" /> */}
				<picture>
					<source media={`(max-width: 767px) and (orientation:portrait)`} srcSet="/slides/dhanajiru-m.webp" />
					<source media={`(min-width: 768px) and (orientation:landscape)`} srcSet="/slides/dhanajiru.webp"/>
					<ExportedImage src="/slides/dhanajiru.webp" className="position-absolute" width={1920} height={1080} alt="dhanajiru" />
				</picture>
			</div>
		</div>
		<div className="scene-one_content title-three-one w-100 position-absolute">
			<div className="scene-one_content-sub position-absolute">
				<h2>There is a loss of natural components like Volatile Oils, Etheric Oils & Oleoresins from 14 to 43% when grounded with generic grinding methods.</h2>
			</div>
		</div>
		<div className="scene-one_content title-three-two w-100 position-absolute">
			<div className="scene-one_content-sub position-absolute">
				<div className="pipe scene1-pipe"></div>
				<h2>Thus at Satvam, we use “Cryogenic Grinding Technology”. where spices are ground below 0° Celcius with the help of nitrogen, Which preserves the natural taste, aroma, color & flavors of spices.</h2>
			</div>
		</div>
		<div className="cryogenic-mill w-100 position-absolute">
			<div className="cryogenic-mill-overlay position-absolute"></div>
			<div className="crayogenic-graiding position-absolute">
				<div className="masala-falling position-absolute"></div>
				<div className="thermometer position-absolute">
					<ExportedImage src="/slides/thermometer-base.webp" unoptimized={true} width={95} height={400} alt="Thermometer" />
					<div className="thermometer-sub position-absolute"><ExportedImage src="/slides/thermometer-pipe.webp" unoptimized={true} width={95} height={400} alt="Thermometer" /></div>
				</div>				
				{/* <img src="slides/crayogenic-grainder.webp" className="position-absolute" alt="cryogenic grainder" /> */}
				<ExportedImage src="/slides/crayogenic-grainder.webp" className="position-absolute" width={1920} height={1080} alt="crayogenic grainder" />
				{/* <picture>
					<source media={`(max-width: 575px)`} srcSet="/slides/crayogenic-cold-tank.webp" />
					<source media={`(min-width: 576px)`} srcSet="/slides/crayogenic-cold-tank.webp"/>
					<ExportedImage src="/slides/crayogenic-cold-tank.webp" className="crayogenic-cold-tank position-absolute" width={1920} height={1080} alt="cold tank" />
				</picture> */}
				<Nitrogensvg></Nitrogensvg>
			</div>
			<div className="crayogenic-graiding_stand position-absolute">
				{/* <img src="slides/crayogenic-graiding_stand.webp" className="position-absolute" alt="cryogenic stand" /> */}
				<ExportedImage src="/slides/crayogenic-graiding_stand.webp" className="position-absolute" width={1920} height={1080} alt="crayogenic grainder" />
			</div>
			<div className="nozel position-absolute d-flex justify-content-center">
				<div className="nozel-canvas-wrapper position-absolute">
					<ExportedImage src="/slides/nozel-img.webp" className="position-absolute w-100 h-auto" width={252} height={152} alt="nozel" />
					<div className="nozel-canvas position-relative">
					<canvas id="fallingPowder"></canvas><canvas id="fallingPowder2"></canvas>					
					{/* <img src="slides/nozel-img.webp" className="position-absolute" alt="nozel" /> */}
					{/* <picture>
						<source media={`(max-width: 575px)`} srcSet="/slides/nozel-img.webp" />
						<source media={`(min-width: 576px)`} srcSet="/slides/nozel-img.webp"/>
						<ExportedImage src="/slides/nozel-img.webp" className="position-absolute" width={1920} height={1080} alt="nozel" />
					</picture> */}
					</div>
				</div>
			</div>
			<div className="box-masala position-absolute">
				<div className="box-masala-sub position-absolute">
					<div className="box-masala-subsub position-absolute">
						<div className="box-1 position-absolute">
							<div className="box-holder">
							{/* <img src="slides/box1.webp" alt="masala box" /> */}
							<picture>
								<source media={`(max-width: 575px)`} srcSet="/slides/box1-m.webp" />
								<source media={`(min-width: 576px)`} srcSet="/slides/box.webp"/>
								<ExportedImage src="/slides/box.webp" width={1920} height={1080} alt="masala box" />
							</picture>
							</div>
						</div>
						<div className="box-2 position-absolute">
							<div className="box-holder">
							{/* <img src="slides/box1.webp" alt="masala box" /> */}
							<picture>
								<source media={`(max-width: 575px)`} srcSet="/slides/box1-m.webp" />
								<source media={`(min-width: 576px)`} srcSet="/slides/box.webp"/>
								<ExportedImage src="/slides/box.webp" width={1920} height={1080} alt="masala box" />
							</picture>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="belt-strip position-absolute">
				<div className="belt-strip-sub position-absolute">
					<div className="belt-strip-subsub position-absolute">
						<ExportedImage src="/slides/belt-strip.webp"unoptimized={true} width={7680} height={600} alt="belt" />
						{/* <picture>
							<source media={`(max-width: 575px)`} srcSet="/slides/belt-strip.webp" />
							<source media={`(min-width: 576px)`} srcSet="/slides/belt-strip.webp"/>
							<ExportedImage src="/slides/belt-strip.webp" className="position-absolute" width={1920} height={1080} alt="masala box" />
						</picture> */}
					</div>
				</div>
			</div>
		</div>
		<div className="tumeric-powder position-absolute">
			<div className="tumeric-powder-holder position-absolute">
				<div className="tumeric-powder-img position-absolute">
					{/* <img src="slides/tumeric-powder.webp" className="position-absolute" alt="tumeric powder" /> */}
					<picture>
						<source media={`(max-width: 575px)`} srcSet="/slides/tumeric-powder.webp" />
						<source media={`(min-width: 576px)`} srcSet="/slides/tumeric-powder.webp"/>
						<ExportedImage src="/slides/tumeric-powder.webp" className="position-absolute" width={1920} height={1080} alt="masala box" />
					</picture>
				</div>
				<div className="tumeric-base-white position-absolute"></div>
				<div className="home-footer position-absolute">
					<div className="container-fluid">
						{/* <img src="images/satvam.svg" width="55" height="80" alt="satvam"/> */}
						<picture>
							<source media={`(max-width: 575px)`} srcSet="/images/satvam.svg" />
							<source media={`(min-width: 576px)`} srcSet="/images/satvam.svg"/>
							<img src="/images/satvam.svg" className="position-absolute" width={1920} height={1080} alt="satvam" />
						</picture>
					</div>
				</div>
				<div className="tumeric-powder-content">
					<div>
						<h3>Smart Technology</h3>
						<h2>Smart Masala</h2>
					</div>
				</div>
				<div className="lets-explorer">
					<div className="lets-connect position-relative">
						<div className="satvam-circle">
							<a href="/product" className="position-absolute"></a>
							<div className="explore-products position-absolute">Explore Products</div>
							<div className="right_arrow position-absolute">
								<img src="/slides/arrow-right.svg" width={139} height={34} alt="Explore Products" />
								{/* <img src="slides/arrow-right.svg" alt="right" /> */}
								{/* <picture>
									<source media={`(max-width: 575px)`} srcSet="/slides/arrow-right.svg" />
									<source media={`(min-width: 576px)`} srcSet="/slides/arrow-right.svg"/>
									<img src="/slides/arrow-right.svg" width={139} height={34} alt="Explore Products" />
								</picture> */}
							</div>
						</div>
					</div>
				</div>							
			</div>						
		</div>
      </section>
  );
}
