import Head from "next/head";

interface Type {
	title: string;
}

const SEO = ({ title }: Type) => {
	return (
		<Head>
			<title>STI {title}</title>
		</Head>
	);
};

export default SEO;
