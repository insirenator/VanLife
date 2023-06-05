/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

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
            width: "100%",
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
  const [filters, setFilters] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.getAll("type");
  console.log(typeFilter);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans))
      .catch((err) => console.log(err));
  }, []);

  function handleFilter(e, type) {
    if (filters.includes(type)) {
      e.target.style.borderColor = "white";
      e.target.style.color = "white";
      setFilters(filters.filter((t) => t !== type));
    } else {
      e.target.style.borderColor = "rgb(255, 155, 74)";
      e.target.style.color = "rgb(255, 155, 74)";
      setFilters([...filters, type]);
    }
  }

  const displayedVans =
    filters.length > 0
      ? vans.filter((van) => filters.includes(van.type))
      : vans;

  return (
    <>
      <h1 className="van-page-title">Explore all our Options!</h1>
      <div className="van-page-filters">
        <p onClick={(e) => handleFilter(e, "simple")}>Simple</p>
        <p onClick={(e) => handleFilter(e, "rugged")}>Rugged</p>
        <p onClick={(e) => handleFilter(e, "luxury")}>Luxury</p>
      </div>
      <div className="van-list">
        {displayedVans.map((van, idx) => (
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
