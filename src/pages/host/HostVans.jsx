/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const vanStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  margin: "15px auto",
  padding: "10px",
  borderRadius: "8px",
  cursor: "pointer",
  maxWidth: "min(95%, 600px)",
};

const imgStyle = {
  width: "90px",
  height: "100px",
  borderRadius: "8px",
  marginInline: "10px",
};

function Van({ name, price, imageUrl }) {
  return (
    <div style={vanStyle}>
      <img src={imageUrl} style={imgStyle} />
      <div>
        <h2>{name}</h2>
        <p>${price}/day</p>
      </div>
    </div>
  );
}

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans.filter((van) => van.id % 2 === 0)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        List of all your vans!
      </h1>
      <div>
        {vans.map((van) => (
          <Van
            key={van.id}
            name={van.name}
            price={van.price}
            imageUrl={van.imageUrl}
          />
        ))}
      </div>
    </>
  );
}
