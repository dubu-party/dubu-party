import Head from "next/head";

interface Type {
  title: string;
}

const SEO = ({ title }: Type) => {
  return (
    <Head>
      {/* TODO: 프로젝트 제목 정하기 */}
      <title>Green | {title}</title>
    </Head>
  );
};

export default SEO;
