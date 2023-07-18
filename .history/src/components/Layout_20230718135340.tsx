import React from 'react'

interface Props {
  children: React.ReactNode;
}

const Layout :React.FC<Props>= ({children}) => {
  return (
      <div>
          <Navb
          {children}</div>
  )
}

export default Layout