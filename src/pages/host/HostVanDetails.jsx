import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const hostVanDetails = {
  padding: "1em",
  backgroundColor: "white",
  margin: "2em auto",
  width: "min(95%, 800px)",
  borderRadius: "8px",
  minHeight: "600px",
};

const hostVanDetailsNav = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginBottom: "2em",
};

const activeStyle = {
  fontWeight: "bold",
  borderBottom: "2px solid orange",
};

export default function HostVanDetails() {
  const vanId = useParams().id;
  const [currentVan, setCurrentVan] = useState({});

  useEffect(() => {
    fetch(`/api/vans/${vanId}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans))
      .catch((err) => console.log(err));
  }, [vanId]);
  return (
    <>
      <div className="go-back">
        <Link to=".." relative="path">
          Go Back
        </Link>
      </div>
      <div style={hostVanDetails}>
        <div className="host-van-details">
          <img src={currentVan.imageUrl} />
          <div>
            <h2>{currentVan.name}</h2>
            <h2>${currentVan.price}/day</h2>
            <h3
              style={{
                textTransform: "capitalize",
                color: "white",
                backgroundColor: "black",
                width: "100px",
                textAlign: "center",
                padding: "5px 10px",
                borderRadius: "8px",
              }}
            >
              {currentVan.type}
            </h3>
          </div>
        </div>
        <div style={hostVanDetailsNav}>
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Info
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Photos
          </NavLink>
        </div>
        <Outlet context={currentVan} />
      </div>
    </>
  );
}
