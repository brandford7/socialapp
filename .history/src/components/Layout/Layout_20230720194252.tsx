import React from "react";
import Navbar from "../Header/Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      
      <div className="flex mt-5 h-screen">
        <Navbar />
        <main><PostB</main>
      </div>
    </>
  );
};

export default Layout;
