"use client";
import { getAllCategories } from "@/app/lib/firebase/categoryBlog/read_server";
//import CategoryFirstInternational from "../../@category_first_international/page";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from 'next/navigation';
//import CategoryFirstDomestic from "../@category_first_international/page";

const fetchCountryData = async () => {
  const categories = await getAllCategories();
  return categories;
}

export default function Sidebar({params}) {
  const pathname = usePathname();
  const initialized = useRef(false);
  const hyphenToSpace = (str) => str.replace(/-/g, ' ');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const firstCategory = countries[0]?.id;
  const [activeCategory, setActiveCategory] = useState(null);
  const routers = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // New state for mobile view detection
  const sidebarRef = useRef(null);

  var the_arr = pathname.split('/');
  the_arr.pop();
  const handleCategoryClick = (categoryId, e, categoryName) => {
    routers.push(`/blog/${categoryId}`);
    setActiveCategory(categoryId, e);
    setIsActive(false);
  }
   
  useEffect(()=>{
      if(!initialized.current){
          initialized.current = true;    
          const getData = async () =>{
            try{
              const data = await fetchCountryData();
              setCountries(data);
              const pathname = location.pathname;
              const pathSegments = pathname.split('/').filter(segment => segment !== '');
              const lastPathSegment = pathSegments[pathSegments.length - 1];
              setActiveCategory(lastPathSegment);

              function isTouchDevice(){
                return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
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
  return <>
      <button onClick={toggleSidebar} className={`right-navi-blog position-fixed ${isActive ? 'active' : ''}`}><img src="/images/category-icon.svg" width="32" height="30" alt="Blog"/></button>      
      <div ref={sidebarRef} className={`blog-category-links ${isActive ?  'opened' : ''}`}>
        {/* { the_arr.join('/')} */}
        <h3>Categories</h3>
          <ul className="position-relative">
            <li className={ pathname === '/blog' ? "active" : ""}><Link href={'/blog'}><span>All Categories</span></Link></li>
              {countries?.map((category, index) =>{
                  return (                    
                    <li key={index} data-category={category?.id} onClick={(e) => handleCategoryClick(category.id, e, category?.name)} className={activeCategory === category?.id ? 'active' : '' || the_arr.join('/') === `/blog/${category?.id}` ? "active" : ""}><Link href={'#'} className={ the_arr.join('/') === `/blog/${category?.id}` ? "active" : ""}><span>{hyphenToSpace(category?.name)}</span></Link></li>
                  )
                }
              )}
          </ul>
      </div>
  </>
}