import React, { ReactNode } from 'react';
import { Header } from './';

const Layout = ({
    children
  }:{
    children: ReactNode
  }): React.ReactElement => {
  return (
   <>
    <Header />
      {children}
   </>
  )
}

export default Layout
