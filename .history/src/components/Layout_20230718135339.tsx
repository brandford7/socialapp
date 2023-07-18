import React from 'react'

interface Props {
  children: React.ReactNode;
}

const Layout :React.FC<Props>= ({children}) => {
  return (
      <div>
          <Nav
          {children}</div>
  )
}

export default Layout