import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="home-link">
        #VANLIFE
      </Link>
      <Link to="/host">Host</Link>
      <Link to="/about">About</Link>
      <Link to="/vans">Vans</Link>
    </div>
  );
}
