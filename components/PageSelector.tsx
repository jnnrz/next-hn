import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface PageSelectorProps {
	current: number;
	maxPages: number;
}

const PageSelector = ({ current, maxPages }: PageSelectorProps) => {
	const router = useRouter();

	return (
		<div className="shadow bg-white p-2">
			<div className="container mx-auto flex flex-row justify-center">
				<button
					className="selector-btn"
					onClick={() => router.push(`/?page=${current - 1}`)}
					disabled={current <= 1}
				>
					Previous
				</button>
				<span className="ml-4 mr-4">
					{current} / {maxPages}
				</span>
				<button
					className="selector-btn"
					onClick={() => router.push(`/?page=${current + 1}`)}
					disabled={current + 1 > maxPages}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default PageSelector;
