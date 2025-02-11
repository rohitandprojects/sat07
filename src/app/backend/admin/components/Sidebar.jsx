"use client";
//import { getAllCategories } from "@/app/lib/firebase/category/read_server";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from 'next/navigation';
import SidebarDomestic from '@/app/backend/admin/domestic-products/@sidebar/page';
import SidebarInternational from '@/app/backend/admin/international-products/@sidebar/page';
import SidebarBlog from "@/app/backend/admin//blog-products/@sidebar/page";
//import Sidebar from '@/app/product/domestic/@sidebar/page';

// const fetchCountryData = async () => {
//     const categories = await getAllCategories();
//     return categories;
//   }

export default function Sidebar(){
    const pathname = usePathname();
    const link = [
        {
            name : 'Dashboard',
            link : '/backend/admin'
        },
        {
            name : 'TVC and Corporate Film',
            link : '/backend/admin/tvc'
        },
        {
            name : 'Event',
            link : '/backend/admin/event'
        },
        {
            name : 'Domestic Categories',
            link : '/backend/admin/categories'
        },
        {
            name : 'Domestic Products',
            link : '/backend/admin/posts'
        },
        {
            name : 'International Categories',
            link : '/backend/admin/categoriesInter'
        },
        {
            name : 'International Products',
            link : '/backend/admin/postsInter'
        },
        // {
        //     name : 'Other Category',
        //     link : '/backend/admin/categoryOther'
        // },
        // {
        //     name : 'Authors',
        //     link : '/backend/admin/authors'
        // },
        
    ]
    return <div className="sidebar-admin" data-lenis-prevent>
        <ul>
            <li><Link href="/backend/admin" className={ pathname === '/backend/admin' ? "active" : ""}>Dashboard</Link></li>
            <li><Link href="/backend/admin/categories" className={ pathname === '/backend/admin/categories' ? "active" : ""}>Domestic Categories</Link></li>
            <li><Link href="#" className="admin-products-link">Domestic Products</Link>                
                <SidebarDomestic></SidebarDomestic>
            </li>
            <li><Link href="/backend/admin/categoriesInter" className={ pathname === '/backend/admin/categoriesInter' ? "active" : ""}>International Categories</Link></li>
            <li><Link href="#" className="admin-products-link">International Products</Link>
                <SidebarInternational></SidebarInternational>
            </li>
            <li><Link href="/backend/admin/categoriesBlog" className={ pathname === '/backend/admin/categoriesBlog' ? "active" : ""}>Blog Categories</Link></li>
            <li><Link href="#" className="admin-products-link">Blog Posts</Link>
                <SidebarBlog></SidebarBlog>
            </li>
            <li><Link href="#" className="admin-products-link">About</Link>
                <ul className="position-relative">
                    <li><Link href="/backend/admin/categoriesAbout" className={ pathname === '/backend/admin/categoriesAbout' ? "active" : ""}>Corporate Video & Apply Now</Link></li>
                    <li><Link href="/backend/admin/advertisement" className={ pathname === '/backend/admin/advertisement' ? "active" : ""}>Advertisement</Link></li>
                    <li><Link href="/backend/admin/job" className={ pathname === '/backend/admin/job' ? "active" : ""}>Job Provider</Link></li>
                </ul>
            </li>
            <li><Link href="#" className="admin-products-link">Export</Link>
                <ul className="position-relative">
                    <li><Link href="/backend/admin/event-exhibition" className={ pathname === '/backend/admin/event-exhibition' ? "active" : ""}>Event & Exhibition</Link></li>
                    <li><Link href="/backend/admin/international-carousel" className={ pathname === '/backend/admin/international-carousel' ? "active" : ""}>International Carousel</Link></li>
                    <li><Link href="/backend/admin/catalogue" className={ pathname === '/backend/admin/catalogue' ? "active" : ""}>E-Catalogue</Link></li>
                </ul>
            </li>            
            <li><Link href="#" className="admin-products-link">Media</Link>
                <ul className="position-relative">
                    <li><Link href="/backend/admin/tvc" className={ pathname === '/backend/admin/tvc' ? "active" : ""}>TVC and Corporate Film</Link></li>
                    <li><Link href="/backend/admin/events" className={ pathname === '/backend/admin/events' ? "active" : ""}>Events</Link></li>
                    <li><Link href="/backend/admin/outdoors" className={ pathname === '/backend/admin/outdoors' ? "active" : ""}>Outdoors</Link></li>
                    <li><Link href="/backend/admin/social" className={ pathname === '/backend/admin/social' ? "active" : ""}>Social Media</Link></li>
                </ul>
            </li>
        </ul>
    </div>
}