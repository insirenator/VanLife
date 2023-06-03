import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function VanDetails() {
  const params = useParams();
  const [van, setVan] = useState({});

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans))
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <div className="van-details-page">
      <h1 className="title">{van.name}</h1>
      <div className="van-details">
        <div className="image">
          <img src={van.imageUrl} />
          <p className="price">
            ${van.price} <span className="per-day">/day</span>
          </p>
          <p className="type">{van.type}</p>
        </div>
        <p className="description">{van.description}</p>
        <button className="btn book-btn">Book Now</button>
      </div>
    </div>
  );
}
