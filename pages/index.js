import "../css/styles.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossOrigin="anonymous"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Header />
    <main>
      <h2 className="box-header">Featured Work</h2>
      <div className="works-container">
        <div className="project-wrap pixel">
          <img
            src="../static/img/pixel.png"
            alt="Pixel Art Maker Project"
            className="project-image"
          />
          <p className="project-name">Pixel Art Maker</p>
          <a
            href="https://protected-beyond-69634.herokuapp.com/"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
        <div className="project-wrap calculator">
          <img
            src="../static/img/calculator.png"
            alt="CodePen Calculator"
            className="project-image"
          />
          <p className="project-name">Calculator</p>
          <a
            href="https://codepen.io/geekypghrunner/full/KyaexY/"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
        <div className="project-wrap week-to-week">
          <img
            src="../static/img/week-to-week.png"
            alt="Ruby on Rails Planner App"
            className="project-image"
          />
          <p className="project-name">Week-to-Week App</p>
          <a
            href="https://week-to-week.herokuapp.com/users/sign_in"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </div>
      <div>
        <h2 className="box-header">Technologies</h2>
      </div>
    </main>
    <Footer />
  </div>
);
