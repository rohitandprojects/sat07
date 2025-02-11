// components/Navigation.js
"use client";
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const router = useRouter();
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      // Close the navigation when navigating to a new page
      setIsNavigationOpen(false);
    };

    //router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      //router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };

  return (
    <div className={`navigation ${isNavigationOpen ? 'open' : ''}`} style={{paddingTop:300}}>
      <button onClick={toggleNavigation}>Toggle Navigation</button>
      <ul>
        <li><a href="/">Link 1</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/products">products</a></li>
        <li><a href="/b2b">b2b</a></li>
        <li><a href="/export">export</a></li>
        <li><a href="/media">media</a></li>
      </ul>
    </div>
  );
};

export default Navigation;
