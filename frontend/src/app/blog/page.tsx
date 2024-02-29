import React from 'react';
import { Metadata } from 'next';

export const metadata:Metadata = {
	title: {
		absolute: "blog"
	}
}

const Blog = () => {
	return (
		<div>
			<h1>my blog</h1>
		</div>
	);
};

export default Blog;
