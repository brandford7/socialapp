import React from "react";
import Navbar from "../Header/Navbar";
import PostBox from "../PostBox";
import UserAvatar from "../UserAvatar";
import PostCard from "../Post/PostCard";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col mt-5 h-screen px-5  space-y-4">
      {children}
      </div>
    </>
  );
};

export default Layout;
