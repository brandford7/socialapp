import React from "react";


interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
      <>
          <N
      <main>{children}</main>
    </>
  );
};

export default Layout;
