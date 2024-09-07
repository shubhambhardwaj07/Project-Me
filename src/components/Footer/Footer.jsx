import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="message">Strive for greatness, every day.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/shubham/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/shubham"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/shubham"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
        <p className="copyright">2024 Shubham. All rights reserved.</p>
      </div>
    </footer>
  );
};
