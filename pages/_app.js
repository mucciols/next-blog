import { Head } from "next/document";
import NavBar from "../components/Navbar";
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <link rel="icon" href="/favicon.ico"></link>
      </Head> */}
      <header>
        <NavBar />
      </header>
      <Component {...pageProps}></Component>
    </>
  );
}

export default App;
