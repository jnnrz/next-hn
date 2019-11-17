import React from 'react';

interface ContainerProps {
	children: object;
}

const Container = ({ children }: ContainerProps) => {
	return <div className="container mx-auto bg-white shadow mt-24">{children}</div>;
};

export default Container;
