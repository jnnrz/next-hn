import React from "react";
import Nav from "./Nav";

interface HeaderProps {
  children?: object;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <div className="fixed inset-x-0 top-0 z-10 block">
      <Nav />
      {children}
    </div>
  );
};

export default Header;
