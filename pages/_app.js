import NavBar from "../components/Navbar";
import '../styles/globals.css'

function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps}></Component>
    </>
  );
}

export default App;
