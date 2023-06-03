/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function colorByType(type) {
  switch (type) {
    case "simple":
      return "#00b368";
    case "rugged":
      return "#0d96ff";
    case "luxury":
      return "#e9bb04";
    default:
      return "black";
  }
}

function Van({ id, name, type, price, imageUrl }) {
  return (
    <Link to={`/vans/${id}`} style={{ textDecoration: "none" }}>
      <div className="van-card">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "150px",
            height: "150px",
            marginInline: "auto",
            borderRadius: "8px",
            border: `2px solid ${colorByType(type)}`,
          }}
        >
          <p
            style={{
              backgroundColor: colorByType(type),
              textShadow: "1px 1px 3px black",
              color: "white",
              width: "40%",
              padding: "2px",
              textAlign: "center",
              fontSize: "14px",
              textTransform: "capitalize",
            }}
          >
            {type}
          </p>
        </div>

        <p className="name">{name}</p>
        <p className="price">${price}</p>
      </div>
    </Link>
  );
}

export default function Vans() {
  const [vans, setVans] = useState([]);
  console.log(vans);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className="van-page-title">Explore all our Options!</h1>
      <div className="van-list">
        {vans.map((van, idx) => (
          <Van
            key={idx}
            id={van.id}
            name={van.name}
            type={van.type}
            price={van.price}
            imageUrl={van.imageUrl}
          />
        ))}
      </div>
    </>
  );
}
