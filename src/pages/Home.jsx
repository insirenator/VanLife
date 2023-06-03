import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="banner">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement.</p>
        <p>Find the perfect van for your perfect road trip.</p>
        <button className="btn link-btn">
          <Link to="/vans">Find a Van</Link>
        </button>
      </div>
    </>
  );
}
