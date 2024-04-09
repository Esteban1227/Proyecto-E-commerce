import React from 'react'
import Header from '../Header/Header'
import { Toaster } from 'sonner'
import "./Layout.css"

export default function Layout({children, onLogout}) {
  return (
    <React.Fragment>
        <Header onLogout={onLogout}/>
        <main>
            {children}
            <Toaster richColors position="bottom-right"/> 
        </main>
    </React.Fragment>
  )
}
