import { Outlet, Link, useLocation } from "react-router-dom";

const linkStyle = (realPath, currPath) => ({
  borderBottom: realPath === currPath ? "2px solid rgb(255, 155, 74)" : "none",
  color: realPath === currPath ? "black" : "grey",
});

export default function HostLayout() {
  const path = useLocation().pathname;
  return (
    <>
      <nav className="navbar">
        <Link to="/host" style={linkStyle("/host", path)}>
          Dashboard
        </Link>
        <Link to="/host/income" style={linkStyle("/host/income", path)}>
          Income
        </Link>
        <Link to="/host/reviews" style={linkStyle("/host/reviews", path)}>
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
