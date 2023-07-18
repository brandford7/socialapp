import React from "react";
import Navbar from "../Header/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
