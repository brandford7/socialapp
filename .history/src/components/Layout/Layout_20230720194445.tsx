import React from "react";
import Navbar from "../Header/Navbar";
import PostBox from "../PostBox";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col mt-5 h-screen">
        <Navbar />
        <main>
          <section className="post-area flex">
            <Us
            <PostBox />
          </section>
        </main>
      </div>
    </>
  );
};

export default Layout;
