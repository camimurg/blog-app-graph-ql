import React from 'react';
import { Header } from './'

const Layout = ({ 
    children
  }:{
    children : React.ReactNode 
  }): React.ReactElement => {
  return (
   <>
    <Header />
      {children}
   </>
  )
}

export default Layout
