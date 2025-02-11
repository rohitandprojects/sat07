import Sidebar from '@/app/product/international/@sidebar/page';
import React from 'react';
 const layout = ({ children }) => {
  return (
    <div>
      <Sidebar></Sidebar>
      {children}
      </div>
  )
}

export default layout