import Link from 'next/link';

export const metadata = {
	title: "about codeevolution"
}

const Home = () => {
	return (
		<>
			<h1>HomePage</h1>
			<Link href={"/blog"}>Blog</Link>
			<Link href={"/about"}>About</Link>
		</>
	);
};

export default Home;
