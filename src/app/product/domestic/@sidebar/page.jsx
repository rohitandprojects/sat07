"use client";
import { getAllCategories } from "@/app/lib/firebase/category/read_server";
import CategoryFirstInternational from "../../@category_first_international/page";
import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

const fetchCountryData = async () => {
  const categories = await getAllCategories();
  return categories;
}

export default function Sidebar() {
  const initialized = useRef(false);
  const scrolling = useRef(false);
  const iniFlag = useRef(false);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const firstCategory = countries[0]?.id;
  const [activeCategory, setActiveCategory] = useState(null);
  const routers = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // New state for mobile view detection
  const sidebarRef = useRef(null);
  const activeIndexRef = useRef(0); // Reference to track the active index
  //const [iniFlag, setIniFlag] = useState(false);
  //const [activeStyle, setActiveStyle] = useState({});
  //const buttonRef = useRef(null);
  const handleCategoryClick = (categoryId, e, categoryName) => {
    //alert('click on link: '+categoryName);
    routers.push(`/product/domestic/${categoryId}`);
    activeIndexRef.current = countries.findIndex(c => c.id === categoryId);
    if(countries.length == (activeIndexRef.current + 1)){
      activeIndexRef.current = -1;
    }
    setActiveCategory(categoryId, e);
    setIsActive(false);
  }
  const handleFirstDomCategoryClick = (firstCategory) => {
    //console.log('firstCategory: ' + firstCategory);
    routers.push(`/product/domestic/${firstCategory}`);
    setActiveCategory(firstCategory);
    document.getElementById('effect').style.top = '0px';
    activeIndexRef.current = countries.findIndex(c => c.id === firstCategory);
  }
  useEffect(()=>{
      if(!initialized.current){
          initialized.current = true;    
          const getData = async () =>{
            try{
              const data = await fetchCountryData();
              setCountries(data);              
              const pathname = window.location.pathname;
              //const pathSegments = pathname.split('/').filter(segment => segment !== '');
              //const lastPathSegment = pathSegments[pathSegments.length - 1];
              const lastPathSegment = pathname.split('/').pop();
              setActiveCategory(lastPathSegment);

              //const pathnames = window.location.pathname; // Get the current pathname
              //const initialCategoryId = pathnames.split('/').pop(); // Extract the last part of the path

              if (data.length >= 0) {
                const initialCategory = data.find(c => c.id.toString() === lastPathSegment);
                /*console.log('Initial Category:', initialCategory.id);*/
                activeIndexRef.current = data.findIndex(c => c.id === initialCategory.id);
                /*console.log('activeIndexRef.current:', activeIndexRef.current);
                console.log('next:', data[activeIndexRef.current+1]?.id);
                console.log('data.length:- ', data.length)*/
                if(data.length == activeIndexRef.current+1){
                  //console.log('next:- ', data[activeIndexRef.current]?.id);
                  activeIndexRef.current = -1;
                }
              }
              else{

              }

              function isTouchDevice(){
                return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
              }
              //const firstbox = document.getElementById("content");
              /* Start Product Listing*/
              setTimeout(function(){
                      [].forEach.call(document.querySelectorAll('.left-links ul li'), function(link) {
                        link.addEventListener('mouseover', function(event) {
                          var elem = this;
                          //console.log(elem.offsetLeft, elem.offsetTop);
                          document.getElementById('effect').style.top = elem.offsetTop + 'px';
                        },false);
                      });
                      var leftActiveLink;
                      leftActiveLink = document.querySelector('.left-links ul .active');
                      function leftMenuOutFn(elem){
                        //console.log('hello');
                        var list = traverseChildren(elem);
                        return function onMouseOut(event) {
                            var e = event.toElement || event.relatedTarget;
                            if (!!~list.indexOf(e)) {
                                return;
                            }
                            if(leftActiveLink){
                              leftActiveLink = document.querySelector('.left-links ul .active');
                            document.getElementById('effect').style.top = leftActiveLink.offsetTop + 'px';
                          }
                      };}
                      const productMenu = document.getElementById('effect');    
                      function movetoActive(){
                        if(leftActiveLink){
                          //console.log('left link');
                          
                          productMenu.style.top = leftActiveLink.offsetTop + 'px';
                        }
                      }
                      movetoActive();
                      //using closure to cache all child elements
                      const parentOfLeftMenu = document.querySelector('.left-links');
                      if(parentOfLeftMenu){
                        parentOfLeftMenu.addEventListener('mouseout',leftMenuOutFn(parentOfLeftMenu),true);
                      }
                      //quick and dirty BFS children traversal, Im sure you could find a better one                                        
                      function traverseChildren(elem){
                        var children = [];
                        var q = [];
                        q.push(elem);
                        while (q.length>0)
                        {
                            var elem = q.pop();
                            children.push(elem);
                            pushAll(elem.children);
                        }
                            function pushAll(elemArray){
                                for(var i=0;i<elemArray.length;i++)
                                {
                                    q.push(elemArray[i]);
                                }          
                            }
                            return children;
                      }
                      /* End Product Listing*/
                      /* start product left navi*/
                      /*const left_menu = document.querySelector('.left-navi');
                      const left_items = document.querySelector('.left-links');
                      if(left_menu){
                        left_menu.addEventListener('click', function hamburgerClick(){
                            if(left_items.classList.contains('opened')){
                              left_items.classList.remove('opened');
                              left_menu.classList.remove('active');
                                
                            }
                            else{
                              left_items.classList.add('opened');
                              left_menu.classList.add('active');
                                
                            }
                        });
                      }
                      function closeNav() {
                          if(left_menu){
                              left_items.classList.remove('opened');
                              left_menu.classList.remove('active');
                          }
                      }
                      document.onclick = function (e) {
                        if (e.target.id !== 'mySidebar' && e.target.id !== 'btn_left_navi') {
                            if (e.target.offsetParent && e.target.offsetParent.id !== 'mySidebar')
                                closeNav()
                        }
                      }*/
                      /* end product left navi*/
                      var win_height = window.innerHeight;
                      /* var final_height=0; 
                      window.addEventListener("scroll", () => {
                        console.log(this.scrollY+' :you passed red box bottom: '+firstbox.scrollHeight);
                        final_height = firstbox.scrollHeight - win_height;
                        if (this.scrollY >= final_height) {
                          console.log(' in ');
                        }
                      });*/
                     // console.log('Load JS');
                      reportWindowSize();
                      //console.log('run');
              },100);
              
              function reportWindowSize(){
                const scrollLeftLinks = document.querySelector('.left-links');
                const scrollcontainer = document.querySelector('.category-sub');
                const content = document.querySelector('.content-scroll');
                let isScrolling = false;
                let startPosition = null;
                let startMarginTop = null;
                const scrollSpeed = 2; // Adjust the scroll speed as needed
                setTimeout(function(){
                  //console.log('hi');
                  if(scrollcontainer){      
                    if(isTouchDevice() === true){
                      scrollcontainer.classList.add('touchscreen');
                    }
                    else{ 
                      scrollcontainer.classList.remove('touchscreen');
                      scrollcontainer.addEventListener('mousemove', handleMouseMove);
                      scrollcontainer.addEventListener('mouseenter', handleMouseEnter);
                  
                      function handleMouseMove(event) {
                        if (!isScrolling) {
                          startPosition = event.pageY;
                          startMarginTop = parseInt(window.getComputedStyle(content).marginTop);
                          isScrolling = true;
                        }
                  
                        const distance = event.pageY - startPosition;
                        const scrollDistance = distance * scrollSpeed;
                        const maxScrollTop = scrollcontainer.clientHeight - content.offsetHeight;
                  
                        let newMarginTop = startMarginTop - scrollDistance;
                        newMarginTop = Math.max(newMarginTop, maxScrollTop); // Limit scroll to scrollcontainer bottom
                        newMarginTop = Math.min(newMarginTop, 0); // Limit scroll to scrollcontainer top
                  
                        content.style.marginTop = `${newMarginTop}px`;
                      }
                  
                      function handleMouseEnter(event) {
                        const containerRect = scrollcontainer.getBoundingClientRect();
                        const pointerPosition = event.clientY;
                        if (pointerPosition > containerRect.bottom) {
                          isScrolling = true;
                        }
                      }
                    }
                  
                    scrollLeftLinks.addEventListener('mouseleave', () => {
                      isScrolling = false;
                      content.style.marginTop = '0';
                    });
                  }
                },300)
              }
              //reportWindowSize();
              window.onresize = reportWindowSize;
          
              var pagetitle,category_name,flag,listItems,category_id,detail_flag='notDetail'; 
              //const myInterval = setInterval(myTimer, 2000);
              
              function myTimer() {
                  pagetitle = document.querySelector('.page-title h1'); 
                  if(pagetitle){
                    category_name = pagetitle.getAttribute('data-text');
                  }
                  //console.log('getAttribute :'+ category_name);    
                  if(flag == category_name)
                  {
                      //console.log('if :'+ flag +' '+category_name);
                  }
                  else{
                      listItems = document.querySelectorAll('.content-scroll ul li');
                      listItems.forEach(item => {
                          category_id = item.getAttribute('data-category'); 
                          if (category_id === category_name) {
                          item.classList.add('active');
                          leftActiveLink = document.querySelector('.left-links ul .active');
                          movetoActive();
                          }
                          else{
                              item.classList.remove('active');
                          }
                      });
                      flag = category_name;
                      //console.log('else :'+ flag +' '+category_name);
                  }
              };
              function myStopFunction() {
                clearInterval(myInterval);
              }
            }
            catch(error){
            }
          }
          getData();
      }
  },[]);
// Handle outside click
useEffect(() => {
  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };
  document.addEventListener('mousedown', handleOutsideClick);
  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, [sidebarRef]);

// Detect screen size to enable mobile view behavior
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 991) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsActive(false); // Ensure sidebar closes on larger screens
    }
  };
  // Initial check
  handleResize();
  // Attach event listener to window resize
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
const toggleSidebar = () => {
  if (isMobile) {
    setIsActive(!isActive);
  }
};
  useEffect(() => {
    if(!scrolling.current){
        scrolling.current = true;
        const timerFlag = setTimeout(() => { 
        if(!iniFlag.current){
          iniFlag.current = true; 
          // console.log('iniFlag:- true true');
          return () => clearTimeout(timerFlag);
        }
      }, 3000);
    }
    const handleScroll = () => {      
      // Calculate how far the user has scrolled
      const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      // If scrolled to the bottom, trigger your callback function     

      if (scrolledToBottom) {
        if(iniFlag.current){
          iniFlag.current = false;
          //console.log('Product Listing');
          const productLoader = document.querySelector('.product-loader');
          if(productLoader){
            productLoader.classList.add('active');
          }
          handleScrollToBottom();
        }
      }
    };
    
    const handleScrollToBottom = () => {
      // Your callback function to be executed when scrolled to bottom
      /*console.log('------------------------------------');
      console.log('Scrolled to bottom of page!');
      console.log('------------------------------------');*/
      const nextIndex = activeIndexRef.current + 1; // Increment the index
      //console.log('countries: '+ [countries?.id].length);
      if (nextIndex < countries.length) {
        //console.log('nextIndex: '+ nextIndex + '  countries.length:'+ countries.length);
        routers.push(`/product/domestic/${countries[nextIndex]?.id}`);
        const nextCategory = countries[nextIndex]?.id;
        //setActiveCategory(firstCategory);        
        const timer2 = setTimeout(() => {
          let leftActiveLink = document.querySelector('.left-links ul .active');
          if(leftActiveLink){
            document.getElementById('effect').style.top = leftActiveLink.offsetTop + 'px';
          }
          return () => clearTimeout(timer2);
        }, 1000);

        const timer3 = setTimeout(() => {
          if(!iniFlag.current){
            iniFlag.current = true; 
           //console.log('iniFlag:- timer3 true');
            return () => clearTimeout(timer3);
          }
        }, 3500);

        const timer = setTimeout(() => {
          setActiveCategory(nextCategory);
          if (nextIndex == (countries.length - 1)){
              //console.log('nextIndex: '+ nextIndex);
              activeIndexRef.current = -1; // Update the ref to the new index  
             // console.log('nextIndex-1: '+ (nextIndex-1) + "  activeIndexRef.current: "+  activeIndexRef.current);
          }
          else{
            activeIndexRef.current = nextIndex; // Update the ref to the new index 
          }
          // You can perform any action here, like updating state or making an API call
        }, 700);    
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timer);
      }
      
      //console.log(nextCategory);
      //debugger;
      /*if(nextCategory){
        console.log(nextCategory);
        router.push(nextCategory);
      }*/
      
      // Perform actions you want here, e.g., fetching more data, etc.
    };

    // Add scroll event listener when component mounts
      window.addEventListener('scroll', handleScroll);

    // Clean up the scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [countries]); // Empty dependency array ensures this effect runs only once

  return <>
    <ul className="product-range-links d-flex justify-content-center position-fixed">
      <li onClick={(e) => handleFirstDomCategoryClick(firstCategory)}><Link href='#' className="active">Domestic Range</Link></li>
      <li><CategoryFirstInternational linkName={'International Range'}></CategoryFirstInternational></li>
    </ul>
    <button onClick={toggleSidebar} className={`left-navi position-fixed ${isActive ? 'active' : ''}`}><img src="/images/category-icon.svg" width="32" height="30" alt="Ground spices"/></button>
      <div ref={sidebarRef} className={`left-links position-fixed ${isActive ?  'opened' : ''}`}>
        <div className="category-sub">
          <div id="scroll" className="content-scroll">
            <ul className="position-relative">              
              {countries?.map((category, index) =>{
                  return (                    
                    <li key={index} data-category={category?.id} onClick={(e) => handleCategoryClick(category.id, e, category?.name)} className={activeCategory === category?.id ? 'active' : ''}><Link href={'#'}><img src={category?.iconURL} width="30" height="30" alt={category?.name}/><span>{category?.name}</span></Link></li>
                  )
                }
              )}
              <div className="effect position-absolute" id="effect"><div><img src="/images/icon5.svg" width="30" height="30" alt="Jeera Powder"/><span>Effect</span></div></div>
            </ul>
          </div> 
        </div>
      </div>
  </>
}