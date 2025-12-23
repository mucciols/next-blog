
import Head from "next/head";

function HomePage() {
  console.log("[HomePage] render");
  return (
    <>
      <Head>
        <title>My Blog</title>
        <meta name="description" value="this is my blog" />
      </Head>
      <main>
        <h1>My Blog</h1>
      </main>
    </>
  );
}

export default HomePage;
