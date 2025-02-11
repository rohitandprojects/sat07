import React from 'react';
import Link from 'next/link';


const Nav = () => {
    const links = [
        {
            path:'/',
            name:'Home'
        },
        {
            path:'/about',
            name:'About Us'
        },
        {
            path:'/products',
            name:'Products'
        },
        {
            path:'/b2b',
            name:'B2B/Bulk'
        },
        {
            path:'/export',
            name:'Export'
        },
        {
            path:'/media',
            name:'Media'
        },
        {
            path:'/contact',
            name:'Contact'
        }
    ]
  return (
    
    <div className="menu-main position-fixed">
        <div className="menu-logo position-absolute"><img src="images/menu-logo.svg" width={103} height={150} alt="search" /></div>
        <div className="menu-sub d-flex justify-content-between">
            <div className="menu-links">
                <ul>
                    {links.map((link) => {
                        return(
                            <li key={link.path} onClick={toggleClass}>
                                <Link href={link.path}>
                                    {link.name}
                                </Link>
                            </li>
                        )
                    }
                    )}
                    {/* <li><a href="index.html" class="anchor">Home</a></li>
                    <li><a href="about.html" class="anchor">About Us</a></li>
                    <li><a href="product.html" class="anchor">Products</a></li>
                    <li><a href="b2b.html">B2B/Bulk</a></li>
                    <li><a href="export.html">Export</a></li>
                    <li><a href="media.html">Media</a></li>
                    <li><a href="contact.html">Contact</a></li> */}
                </ul>
                <div className="shop-link"><a href="/" className="bullet-link">Shop</a></div>
            </div>
            <div className="social-links">
                <ul>
                    <li><a href="/"><img src="images/youtube.svg" width={30} height={30} className="w-100" alt="youtube" /></a></li>
                    <li><a href="/"><img src="images/linkedin.svg" width={30} height={30} className="w-100" alt="linkedin" /></a></li>
                    <li><a href="/"><img src="images/instagram.svg" width={30} height={30} className="w-100" alt="instagram" /></a></li>
                    <li><a href="/"><img src="images/twitter.svg" width={30} height={30} className="w-100" alt="twitter" /></a></li>
                    <li><a href="/"><img src="images/facebook.svg" width={30} height={30} className="w-100" alt="facebook" /></a></li>
                </ul>
            </div>
        </div>
        <div className="menu-footer d-flex justify-content-between">
            <p>© 2022 - Satvam Nutrifoods Limited. | <a href="terms-and-policy.html">Terms and Policy</a></p>
            <p>Agency Credits  <a href="/">Netglobes</a></p>
        </div>
    </div>
  )
}

export default Nav