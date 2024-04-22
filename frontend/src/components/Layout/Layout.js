import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Toaster } from 'sonner'
import "./Layout.css"
import HeaderNotLogin from '../Header/HeaderNotLogin'

export default function Layout({children, onLogout}) {
  
  const [isLogin, setIsLogin] = useState(true)
  useEffect(() => {
    setIsLogin(window.localStorage.isLoggedIn)
  } );
  // setIsLogin((window.location.href).includes("/"))
  return (
    <React.Fragment>
        {isLogin ? <Header onLogout={onLogout}/> : <HeaderNotLogin />}
        
        <main>
            {children}
            <Toaster richColors position="bottom-right"/> 
        </main>
    </React.Fragment>
  )
}
