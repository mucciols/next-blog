import Head from "next/head";

function AboutPage() {
  console.log("[About] render");
  return (
    <>
      <Head>
        <title>My Blog - About</title>
        <meta name="description" value="this is my blog" />
      </Head>
      <main>
        <h1>About</h1>
      </main>
    </>
  );
}

export default AboutPage;
