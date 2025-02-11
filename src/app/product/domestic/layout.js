
import Sidebar from '@/app/product/domestic/@sidebar/page';
import React from 'react';
 const layout = ({ children }) => {
  return (
    <>
      <Sidebar></Sidebar>
      {children}
      </>
  )
}

export default layout