import "../css/styles.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default () => (
  <div id="app">
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-129696464-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'UA-129696464-1');`
        }}
      />
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
    <Header />
    <main>
      <h2>My Story</h2>
      <img src="../static/img/dev-activity.svg" className="dev-activity-img" alt="Developer typing at computer"/>
      <p>
        In August of 2017, I was bit by the programming bug and began my dive
        into the world of web development. Beginning with the basics of HTML and
        CSS from Codecademy, I found my way to The Odin Project. It's here that
        I experienced the awesomeness of JavaScript followed by an adventure
        through the workings of Ruby and Ruby on Rails. While the sheer mass of
        information was overwhelming at times, I was absorbing new concepts at
        every change I had.
      </p>
      <p>
        Knowing the reality of affording a second college degree or attending a
        bootcamp were out of the question, the plan was to continue the scouring
        of the internet for additional free resources for learning. Around the
        time of finishing The Odin Project curriculum, I applied for and
        received a scholarship to complete the Udacity Front-End Developer
        Nanodegree. This program exposed me to the JavaScript frameworks of the
        world, with a special focus on React. At the same time, I also was given
        the opportunity at one of my jobs to implement a MERN app to solve the
        time management challenge faced by college students. In the end, the
        nanodegree was finished well ahead of schedule and the app deployed to
        production.
      </p>
      <p>
        The time has now come to prepare for a career shift. Teaching is
        fulfilling in its own ways, but being a life-long learner who loves to
        problem-solve is making me drawn toward the life of a web developer.
        Looking to hire? Head on down to the links in the footer and send me a
        message!
      </p>
    </main>
    <Footer />
  </div>
);
