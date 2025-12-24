import Head from "next/head";

function FirstPostPage() {
  console.log("[About] render");
  return (
    <>
      <Head>
        <title>My Blog - FirstPostPage</title>
      </Head>
      <main>
        <h1>First Post </h1>
        <p>
          this is my first ever blog post! 
        </p>
      </main>
    </>
  );
}

export default FirstPostPage;
