import Layout from "../components/Layout";
const projectData = [
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
    projectName: "Trail Finder",
    projectDescription:
      "React app hosted on Netlify for finding local running trails	completed as a final project for the Udacity Frontend Nanodegree",
    className: "trail-finder",
    imageSource: "trail-finder.png",
    imageAltText: "Trail Finder App",
    projectLink: "https://trail-finder.netlify.com",
    sourceCode: "https://github.com/seanmfox/trail-finder"
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
  },
  {
    projectName: "Group Gift Planner",
    projectDescription:
      "Track whom is going in on which gifts with whom to cut down on gift exchange miscommunications (learned from experience!).",
    className: "gift-giving",
    imageSource: "gift-giving.png",
    imageAltText: "Group Gift Planner",
    projectLink: "http://gift-giving.herokuapp.com/",
    sourceCode: "https://github.com/seanmfox/gift-giving"
  },
  {
    projectName: "Pixel Art Maker",
    projectDescription:
      "Entertaining JavaScript pixel art maker that performs some basic DOM manipulation.",
    className: "pixel",
    imageSource: "pixel.png",
    imageAltText: "Pixel Art Maker Project",
    projectLink: "https://protected-beyond-69634.herokuapp.com/",
    sourceCode: "https://github.com/seanmfox/pixel-art-maker"
  },
  {
    projectName: "Calculator",
    projectDescription: "Calculator written in vanilla JavaScript.",
    className: "calculator",
    imageSource: "calculator.png",
    imageAltText: "CodePen Calculator",
    projectLink: "https://codepen.io/geekypghrunner/full/KyaexY/",
    sourceCode: "https://codepen.io/geekypghrunner/pen/KyaexY"
  }
];

export default () => (
  <Layout>
    <main className="projects-container">
      {projectData.map((project, index) => (
        <div
          className={`project-container ${project.className} ${
            index % 2 === 0 ? null : "change-order"
          }`}
        >
          <img
            src={`../static/img/${project.imageSource}`}
            alt={`${project.imageAltText}`}
            className="project-image"
          />
          <div
            className="project-details"
            onClick={() => {
              return true;
            }}
          >
            <h3 className="project-name">{project.projectName}</h3>
            <p className="project-desc">{project.projectDescription}</p>
            <a href={project.projectLink} target="_blank">
              Live Demo
            </a>
            <a href={project.sourceCode} target="_blank">
              Source Code
            </a>
          </div>
        </div>
      ))}
    </main>
  </Layout>
);
