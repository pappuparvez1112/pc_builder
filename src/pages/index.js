import RootLayout from "@/components/Layouts/RootLayout";
import HomeCard from "@/components/UI/HomeCard";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>PC_Builder</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeCard></HomeCard>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
