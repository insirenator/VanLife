import { Outlet, NavLink } from "react-router-dom";

// const linkStyle = (realPath, currPath) => ({
//   borderBottom: realPath === currPath ? "2px solid rgb(255, 155, 74)" : "none",
//   color: realPath === currPath ? "black" : "grey",
// });

const activeLink = {
  borderBottom: "2px solid rgb(255, 155, 74)",
  color: "black",
};

export default function HostLayout() {
  // const path = useLocation().pathname;
  return (
    <>
      <nav className="navbar">
        <NavLink
          to="/host"
          end // To avoid /host matching with subroutes
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({ isActive }) => (isActive ? activeLink : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
