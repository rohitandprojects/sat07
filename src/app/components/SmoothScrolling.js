'use client';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
//import { useEffect, useRef } from 'react';

function SmoothScrolling({children}) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
   //console.log(scroll)
  })
  return (
    /*<ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>*/
    <ReactLenis options={{lerp: 0.1, duration: 1.7, smoothTouch: true}} root>
      { children}
    </ReactLenis>
  )
}
export default SmoothScrolling;
