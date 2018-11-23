import Link from "next/link";

const Footer = () => (
  <footer>
    <div className="footer-content">
      <a href="https://www.twitter.com/coderungeek" target="_blank">
        <i className="fab fa-twitter fa-lg" />
      </a>
      <a href="https://www.github.com/seanmfox" target="_blank">
        <i className="fab fa-github fa-lg" />
      </a>
      <a href="https://www.linkedin.com/in/seanmfox" target="_blank">
        <i className="fab fa-linkedin fa-lg" />
      </a>
      <a href="https://www.dev.to/seanmfox" target="_blank">
        <i className="fab fa-dev fa-lg" />
      </a>
    </div>
  </footer>
);

export default Footer;
