import React from "react";
import Navbar from "../Header/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      
      <div className="flex justify-center mt-5 h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
