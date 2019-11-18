import React, { useState } from 'react';
import Link from 'next/link';
import { Thread } from '../interfaces/Thread';

interface CommentThreadProps {
	comments: Thread[];
}

const CommentThread = ({ comments }: CommentThreadProps) => {
	const [ open, setOpen ] = useState(true);

	const handleToggle = (e: React.MouseEvent, { id, repliesCount }: { id: number; repliesCount: number }) => {
		const commentList = document.getElementById(`${id}`);
		const toggleElement = document.getElementById(`togg-${id}`);

		commentList.classList.toggle('hidden');
		const hidden = commentList.classList.contains('hidden');
		toggleElement.innerHTML = hidden ? '[+]' : '[-]';
	};

	return (
		<ul>
			{comments.length > 0 &&
				comments.map((comment, index) => {
					return (
						<li key={index}>
							<div className="comment flex flex-col">
								<div className="by">
									<span className="toggle">
										<a
											className="text-base mr-2"
											id={`togg-${comment.id}`}
											onClick={(e) =>
												handleToggle(e, {
													id: comment.id,
													repliesCount: comment.comments_count
												})}
										>
											[-]
										</a>
									</span>
									<Link href={`/user/${comment.user}`}>
										<a className="user">{comment.user}</a>
									</Link>{' '}
									{comment.time_ago}
								</div>

								<div id={`${comment.id}`}>
									<div className="text" dangerouslySetInnerHTML={{ __html: comment.content }} />

									{comment.comments.length > 0 && (
										<ul className="comment-children">
											<CommentThread comments={comment.comments} />
										</ul>
									)}
								</div>
							</div>
						</li>
					);
				})}
		</ul>
	);
};

export default CommentThread;
