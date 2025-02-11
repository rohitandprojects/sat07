// components/PageChangeHandler.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PageChangeHandler = ({ onRouteChange }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      onRouteChange(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup the event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, onRouteChange]);

  return null;
};

export default PageChangeHandler;
