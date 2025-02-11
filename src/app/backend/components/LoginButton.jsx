"use client";

import { useAuth } from '@/app/lib/contexts/AuthContext';
import { useAmp } from 'next/amp';
//import { useAuth } from '@/app/lib/contexts/AuthContext';
import Link from 'next/link';
import React from 'react'

const LoginButton = () => {
const {
    user,
    isLoading,
    error,
    handleSignInWithGoogle,
    handleLogout
} = useAuth();
 

  if(isLoading){
    return <p>Loading...</p>
  }
  if(user){
    return <div className='d-flex align-items-center justify-content-center'><button onClick={()=>{
      handleLogout();
  }} className='d-flex align-items-center justify-content-center'><img src='/google.svg' className='h-7' alt='Login'/> Logout</button>
    <Link href={'/backend/admin'}>
    <div className='d-flex align-items-center justify-content-center'>
      <img src={user?.photoURL} alt={user?.displayName} className='object-cover h-12 w-12 rounded-full'/>
      <div>
        <h3 className='font-bold'>{user?.displayName}</h3>
        <p className='text-sm'>{user?.email}</p>
      </div>
    </div></Link>
  </div>
  }


  return (
    <div><button onClick={()=>{
        handleSignInWithGoogle();
    }}><img src='/google.svg' className='h-7' alt='Login'/> Login With Google</button></div>
  )
}

export default LoginButton