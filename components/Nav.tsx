import React from 'react';
import Link from 'next/link';

const Nav = () => {
	return (
		<div>
			<nav className="flex p-3 bg-blue-800">
				<div className="flex justify-between items-center flex-wrap container mx-auto">
					<div className="flex items-center flex-shrink-0 text-white mr-10">
						<Link href="/">
							<a href="">
								<span className="font-semibold text-xl tracking-tight text-teal-300">
									<span className="text-white">Next</span>HN
								</span>
							</a>
						</Link>
					</div>
					<div className="block lg:hidden">
						<button
							id="nav-toggle"
							className="flex items-center px-3 py-2 border rounded text-black-900 border-gray-500 hover:text-black hover:border-black"
						>
							<svg
								className="fill-current h-3 w-3"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</button>
					</div>
					<div
						className="w-full block flex-grow text-white lg:flex lg:items-center lg:w-auto hidden"
						id="nav-content"
					>
						<div className="lg:flex-grow">
							<a href="#responsive-header" className="navbar-link lg:inline-block lg:mt-0">
								news
							</a>
							<a href="#responsive-header" className="navbar-link lg:inline-block lg:mt-0">
								newest
							</a>
							<a href="#responsive-header" className="navbar-link lg:inline-block lg:mt-0">
								ask
							</a>
							<a href="#responsive-header" className="navbar-link lg:inline-block lg:mt-0">
								show
							</a>
							<a href="#responsive-header" className="navbar-link lg:inline-block lg:mt-0">
								jobs
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
