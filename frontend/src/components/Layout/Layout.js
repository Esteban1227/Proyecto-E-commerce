import React from 'react'
import Header from '../Header/Header'
import { Toaster } from 'sonner'
import "./Layout.css"
import HeaderNotLogin from '../Header/HeaderNotLogin'
import { useLoginAndLogout } from '../../hooks/useLoginAndLogout'

export default function Layout({children}) {
  const { isLoggedIn } = useLoginAndLogout()

  return (
    <React.Fragment>
        {isLoggedIn ? <Header /> : <HeaderNotLogin />}
        
        <main>
            {children}
            <Toaster richColors position="bottom-right"/> 
        </main>

    </React.Fragment>
  )
}
