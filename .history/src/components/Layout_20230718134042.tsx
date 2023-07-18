import React from 'react'

interface Props {
  children: React.Node;
}
const Layout :React.FC ({children}) => {
  return (
      <div>{children}</div>
  )
}

export default Layout