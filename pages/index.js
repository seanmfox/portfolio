import Layout from "../components/Layout";
const featuredProjectData = [
  {
    projectName: "Trail Finder",
    projectDescription:
      "React app hosted on Netlify for finding local running trails",
    className: "trail-finder",
    imageSource: "trail-finder.png",
    imageAltText: "Trail Finder App",
    projectLink: "https://trail-finder.netlify.com",
    sourceCode: "https://github.com/seanmfox/trail-finder"
  },
  {
    projectName: "Time Tracker",
    projectDescription:
      "Activity tracking app built with React running on a Node.js server",
    className: "time-tracker",
    imageSource: "time-tracker.png",
    imageAltText: "Time Tracker App",
    projectLink: "https://opptimetracker.com",
    sourceCode: "https://github.com/seanmfox/time-tracker"
  },
  {
    projectName: "Week-to-Week",
    projectDescription:
      "Ruby on Rails todo app with Google Calendar integration",
    className: "week-to-week",
    imageSource: "week-to-week.png",
    imageAltText: "Week-to-Week",
    projectLink: "https://week-to-week.herokuapp.com/users/sign_in",
    sourceCode: "https://github.com/seanmfox/scheduler"
  }
];

export default () => (
  <Layout>
    <main className="home-container">
      <div className="greeting-container">
        <p className="greeting-tagline">Developer. Learner. Educator.</p>
        <img className="greeting-image" src="../static/img/programming.svg" />
      </div>
      <div className="technologies-container">
        <h2 className="box-header technologies-title">Technologies</h2>
        <div className="technologies-list-container">
          <div className="technology-wrap">
            <i className="fas fa-laptop-code fa-2x" />
            <h3>Front End</h3>
            <ul className="tech-list fe">
              <li>Bootstrap</li>
              <li>CSS</li>
              <li>HTML5</li>
              <li>JavaScript</li>
              <li>Jest</li>
              <li>React</li>
              <li>Redux</li>
              <li>Ruby on Rails</li>
            </ul>
          </div>
          <div className="technology-wrap">
            <i className="fas fa-database fa-2x" />
            <h3>Back End</h3>
            <ul className="tech-list be">
              <li>Express</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>MySQL</li>
              <li>Node</li>
              <li>Postgresql</li>
              <li>Ruby on Rails</li>
            </ul>
          </div>
          <div className="technology-wrap">
            <i className="fas fa-toolbox fa-2x" />
            <h3>Tools</h3>
            <ul className="tech-list tools">
              <li>Codepen</li>
              <li>Create React App</li>
              <li>Github</li>
              <li>Linux</li>
              <li>Next</li>
              <li>Terminal</li>
              <li>VS Code</li>
              <li>Windows Subsystem for Linux</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="works-container">
        <h2 className="box-header feature-title">Featured Work</h2>
        <div className="works-list-container">
          {featuredProjectData.map(project => (
            <div
              key={project.className}
              className={`featured-project-wrap ${project.className}`}
            >
              <img
                src={`../static/img/${project.imageSource}`}
                alt={`${project.imageAltText}`}
                className="featured-project-image"
              />
              <div
                className="featured-project-details"
                onClick={() => {
                  return true;
                }}
              >
                <h3 className="featured-project-name">{project.projectName}</h3>
                <p className="featured-project-desc">
                  {project.projectDescription}
                </p>
                <a href={project.projectLink} target="_blank">
                  Live Demo
                </a>
                <a href={project.sourceCode} target="_blank">
                  Source Code
                </a>
              </div>
              <div className="overlay" />
            </div>
          ))}
        </div>
      </div>
    </main>
  </Layout>
);
