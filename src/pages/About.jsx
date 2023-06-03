import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="about">
      <div className="about-image"></div>
      <h1>Don&apos;t squeeze in a sedan, when you could relax in a van.</h1>
      <div className="about-content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          aperiam totam, non provident laboriosam quos, fuga suscipit qui amet
          fugit minima? Dolorem eius ipsum placeat libero est quod at ipsam.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, ipsum
          laborum, nemo cumque, id et obcaecati.
        </p>
        <p>
          Ilestiae ducimus vel expedita earum praesentium molestias
          reprehenderit autem? Soluta aspernatur qui labore reprehenderit!
        </p>
      </div>
      <div className="invite-card">
        <h2>Your destination is waiting and you van is ready!</h2>
        <button className="btn">
          <Link to="/vans" className="about-btn">
            Find You Van
          </Link>
        </button>
      </div>
    </div>
  );
}
