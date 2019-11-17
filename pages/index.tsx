import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import PageSelector from '../components/PageSelector';
import { config } from '../config';
import { getFeed } from '../fetch';
import { Article } from '../interfaces/Article';
import Container from '../components/Container';

interface HomeProps {
	news: Article[];
	currentPage: number;
	maxPages: number;
}

const Home: NextPage<HomeProps> = ({ news, currentPage, maxPages }: HomeProps) => {
	return (
		<div>
			<Head>
				<title>{`NextHN | News | Page ${currentPage}`}</title>
			</Head>

			<Header>
				<PageSelector current={currentPage} maxPages={maxPages} />
			</Header>

			<Container>
				<ul>
					{news.length ? (
						news.map((n: Article, k) => {
							return (
								<li key={k} className="block hover:bg-gray-100 border-b border-gray-200">
									<Link href={`/thread/${n.id}`}>
										<div className="flex flex-row">
											<div className="flex flex-row flex-initial items-center justify-center font-semibold hn-orange points-box border-r border-gray-200">
												{n.points}
											</div>
											<div className="flex flex-col w-full flex-1 p-2">
												<div className="flex flex-col lg:flex-row">
													<a href={n.url} className="block font-semibold hover:bg-gray-200">
														{n.title}
													</a>

													<span className="ml-0 lg:ml-3 text-sm text-gray-500">
														{n.domain}
													</span>
												</div>
												<div className="text-sm">
													by{' '}
													<Link href={`/user/${n.user}`}>
														<a className="font-semibold text-blue-700 hover:text-blue-400">
															{n.user}
														</a>
													</Link>
													{' | '}
													<span className="text-gray-600">{n.time_ago}</span>
												</div>
											</div>
											<div className="flex flex-no-wrap flex-row items-center justify-center points-box">
												<Link href={`/thread/${n.id}`}>
													<a className="comments-count">{n.comments_count}</a>
												</Link>
											</div>
										</div>
									</Link>
								</li>
							);
						})
					) : (
						<div>
							<p>Could not load the feed</p>
						</div>
					)}
				</ul>
			</Container>
		</div>
	);
};

Home.getInitialProps = async (ctx: NextPageContext) => {
	const page = ctx.query.page ? ctx.query.page : '1';
	const results = await getFeed('news', page);
	const maxPages = config.maxPages.news;

	return { news: results, maxPages, currentPage: Number(page) };
};

export default Home;
