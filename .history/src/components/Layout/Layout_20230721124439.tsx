import React from "react";


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
