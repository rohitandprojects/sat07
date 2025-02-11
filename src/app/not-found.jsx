import React from 'react'
import Link from 'next/link'
const notfound = () => {
  return (
    <div className='notfound d-flex align-items-center justify-content-center'>
      <div className='notfound-sub text-center'>
        <h1>OPPS!</h1>
        <p>404 - The Page Can't Be Found </p>
        <p><Link href={"/"} className='view-job-offers-link position-relative'>Go to Homepage</Link></p>
      </div>
    </div>
  )
}

export default notfound