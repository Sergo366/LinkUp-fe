import React from 'react';

const First = ({params}: {params: {blogId: string}}) => {
	return (
		<div>
			First {params.blogId}
		</div>
	);
};

export default First;
