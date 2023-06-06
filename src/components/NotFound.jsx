import { Link } from "react-router-dom";
const wrapper = {
  padding: "3em",
  color: "white",
  fontSize: "25px",
};

export default function NotFound() {
  return (
    <div style={wrapper}>
      <h1>404</h1>
      <h3>Oops! Page not Found</h3>
      <Link to="/" className="btn link-btn">
        Go Back to Home
      </Link>
    </div>
  );
}
