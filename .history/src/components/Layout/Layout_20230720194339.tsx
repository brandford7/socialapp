import React from "react";
import Navbar from "../Header/Navbar";
import PostBox from "../PostBox";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      
      <div className="flex FLEX-COL mt-5 h-screen">
        <Navbar />
        <main><PostBox/></main>
      </div>
    </>
  );
};

export default Layout;
