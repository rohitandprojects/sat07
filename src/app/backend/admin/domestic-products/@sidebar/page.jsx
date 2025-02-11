"use client";
import { getAllCategories } from "@/app/lib/firebase/category/read_server";
//import CategoryFirstInternational from "../../@category_first_international/page";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from 'next/navigation';

const fetchCountryData = async () => {
  const categories = await getAllCategories();
  return categories;
}

export default function SidebarDomestic(params) {
  const pathname = usePathname();
  const initialized = useRef(false);
  const hyphenToSpace = (str) => str.replace(/-/g, ' ');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const routers = useRouter();
  //const [activeStyle, setActiveStyle] = useState({});
  //const buttonRef = useRef(null);
  const handleCategoryClick = (categoryId, e, categoryName) => {
    //alert('click on link: '+categoryName);
    routers.push(`/backend/admin/domestic-products/${categoryId}`);
     setActiveCategory(categoryId, e);
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
 
            }
            catch(error){
            }
          }
          getData();
      }
  },[]);
 
  return <>
        <div className="admin-domestic-category-list">           
            <ul className="position-relative">
              <li><Link href="/backend/admin/posts" className={ pathname === '/backend/admin/posts' ? "active" : ""}><img src={'/images/all-category-icon.svg'} width="30" height="30" alt={'Domestic Products'}/><span>All Domestic Products</span></Link></li>
              {countries?.map((category, index) =>{
                  return (                    
                    <li key={index} data-category={category?.id} onClick={(e) => handleCategoryClick(category.id, e, category?.name)}><Link href={'#'} className={ pathname === `/backend/admin/domestic-products/${category?.id}` ? "active" : ""}><img src={category?.iconURL} width="30" height="30" alt={category?.name}/><span>{hyphenToSpace(category?.name)}</span></Link></li>
                    
                  )
                }
              )}
            </ul>
        </div>
       
  </>
}