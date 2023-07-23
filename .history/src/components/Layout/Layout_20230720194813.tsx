import React from "react";
import Navbar from "../Header/Navbar";
import PostBox from "../PostBox";
import UserAvatar from "../UserAvatar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col mt-5 h-screen px-5 h-">
        <Navbar />
        <main>
          <section className="post-area flex space-x-5">
            <UserAvatar name="Brand" />
            <PostBox />
          </section>
        </main>
      </div>
    </>
  );
};

export default Layout;
