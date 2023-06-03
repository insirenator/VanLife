import { NavLink } from "react-router-dom";

const linkStyle = {
  color: "black",
  transform: "scale(1.1)",
};

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className="home-link"
        style={({ isActive }) => (isActive ? linkStyle : null)}
      >
        #VANLIFE
      </NavLink>
      <NavLink
        to="/host"
        style={({ isActive }) => (isActive ? linkStyle : null)}
      >
        Host
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? linkStyle : null)}
      >
        About
      </NavLink>
      <NavLink
        to="/vans"
        style={({ isActive }) => (isActive ? linkStyle : null)}
      >
        Vans
      </NavLink>
    </div>
  );
}
