import {notFound} from "next/navigation"
const Docs = ({params}: {
	params: {
		slug: string[]
	}
}) => {

	if (parseInt(params.slug[0]) === 0) {
		notFound()
	}


	if (params.slug?.length === 2) {
		return <h1>
			Viewing docs {params.slug[0]} and {params.slug[1]}
		</h1>
	}

	return (
		<h1>Docs HomePage</h1>
	);
};

export default Docs;
