import React from 'react'
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout :React.FC<Props>= ({children}) => {
  return (
      <>
          <Navbar/>
          {children}</>
  )
}

export default Layout