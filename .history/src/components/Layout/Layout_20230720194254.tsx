import React from "react";
import Navbar from "../Header/Navbar";
import PostBox from "../PostBox";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      
      <div className="flex mt-5 h-screen">
        <Navbar />
        <main><PostBox/</main>
      </div>
    </>
  );
};

export default Layout;
