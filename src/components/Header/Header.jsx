import Link from "next/link";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/">Shubham</Link>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="projects">Projects</Link>
          </li>
          <li>
            <Link href="skills">Skills</Link>
          </li>
          <li>
            <Link href="contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};
