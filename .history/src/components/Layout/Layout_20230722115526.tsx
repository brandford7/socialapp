import React from "react";
import Navbar from "../header/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
