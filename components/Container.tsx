import React from "react";

interface ContainerProps {
  children: object;
  styles?: string;
}

const Container = ({ children, styles }: ContainerProps) => {
  return (
    <div className={`container mx-auto bg-white shadow ${styles}`}>
      {children}
    </div>
  );
};

export default Container;
