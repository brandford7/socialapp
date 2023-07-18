import React from 'react'

interface Props {
  children: React.ReactNode;
}

const Layout :React.FC<Pro= ({children}) => {
  return (
      <div>{children}</div>
  )
}

export default Layout