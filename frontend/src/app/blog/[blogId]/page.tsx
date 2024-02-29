import { Metadata } from 'next';


type Props = {
	params: {
		blogId: string
	}
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
	const title = await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Iphone 13 ")
		}, 300)
	})

	return {
		title: `Blog ${title}`
	}
}

const First = ({params}: Props) => {
	return (
		<div>
			First {params.blogId}
		</div>
	);
};

export default First;
