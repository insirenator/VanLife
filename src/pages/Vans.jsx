/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

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

function Van({ id, name, type, price, imageUrl, search }) {
  return (
    <Link
      to={`/vans/${id}`}
      state={{ search }}
      style={{ textDecoration: "none" }}
    >
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

const selected = {
  color: "orange",
  borderColor: "orange",
};

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>There was an error: {error}</h2>
      </div>
    );
  }

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <>
      <h1 className="van-page-title">Explore all our Options!</h1>
      <div className="van-page-filters">
        <p
          onClick={() => setSearchParams({ type: "simple" })}
          style={typeFilter === "simple" ? selected : null}
        >
          Simple
        </p>
        <p
          onClick={() => setSearchParams({ type: "rugged" })}
          style={typeFilter === "rugged" ? selected : null}
        >
          Rugged
        </p>
        <p
          onClick={() => setSearchParams({ type: "luxury" })}
          style={typeFilter === "luxury" ? selected : null}
        >
          Luxury
        </p>
        <p onClick={() => setSearchParams({ type: "" })}>Clear All</p>
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
            search={searchParams.toString()}
          />
        ))}
      </div>
    </>
  );
}
