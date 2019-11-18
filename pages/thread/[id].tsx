import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CommentThread from '../../components/CommentThread';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { get } from '../../http';
import { Thread } from '../../interfaces/Thread';

interface ThreadPageProps {
	thread: Thread;
}

const ThreadPage: NextPage = ({ thread }: ThreadPageProps) => {
	return (
		<div>
			<Head>
				<title>{`NextHN | Thread | ${thread.title}`}</title>
			</Head>

			<Header />

			<Container styles="mt-20">
				<div className="flex flex-col p-5">
					<div className="flex flex-col pb-5 border-b-2 border-gray-200">
						<h1>
							<a href={thread.url}>{thread.title}</a>
						</h1>
						<div>
							{thread.points} points | by {' '}
							<Link href={`/user/${thread.user}`}>
								<a className="user">{thread.user}</a>
							</Link>{' '}
							| {thread.time_ago}
						</div>
					</div>

					<div className="flex flex-col mt-3">
						<h3 className="mb-2">{thread.comments_count} comments</h3>
						<CommentThread comments={thread.comments} />
					</div>
				</div>
			</Container>
		</div>
	);
};

ThreadPage.getInitialProps = async (ctx: NextPageContext) => {
	const thread = await get('item', ctx.query.id);
	return { thread };
};

export default ThreadPage;
