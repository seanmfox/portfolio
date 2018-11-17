import "../css/styles.css";
import Head from "next/head";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default () => (
  <div id="app">
    <Head>
      <title>Sean Fox - Web Developer</title>
      <link
        href="https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Julius+Sans+One"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
        integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg"
        crossOrigin="anonymous"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header></Header>
    <main>
      <p>Learn a little about me</p>
    </main>
    <Footer />
  </div>
);
