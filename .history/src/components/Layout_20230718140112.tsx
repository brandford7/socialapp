import React from "react";


interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      
      <main></main>{children}
    </>
  );
};

export default Layout;
