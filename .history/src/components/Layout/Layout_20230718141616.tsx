import React from "react";
import Navbar from "../Header/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex items-center mt-10">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
