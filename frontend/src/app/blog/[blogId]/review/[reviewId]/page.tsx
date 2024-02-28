import React from 'react';

const Review = ({params}: {params: {blogId: string; reviewId: string}}) => {
	return (
		<div>
			First {params.blogId} to {params.reviewId}
		</div>
	);
};

export default Review;
