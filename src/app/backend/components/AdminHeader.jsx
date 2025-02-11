import React from 'react'
import LoginButton from './LoginButton'
import AuthContextProvider from '@/app/lib/contexts/AuthContext'

const AdminHeader = () => {
  return (
    <div className='d-flex align-items-center justify-content-center login-main position-fixed'>
      <div className='login-with-google'>
        <AuthContextProvider>
          <LoginButton></LoginButton>
        </AuthContextProvider>
        {/* <button><img src='/google.svg' alt='google' /> Login with Gmail</button> */}
      </div>
    </div>
  )
}

export default AdminHeader