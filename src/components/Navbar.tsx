import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="nav">
      <Logo />
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience"> Experience </Link>
        <Link to="/projects">Projects</Link>
        <Link to="/tech-stack" className="hover:text-teal-400 transition">
          Tech Stack
        </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
