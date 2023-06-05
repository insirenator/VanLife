import { useOutletContext } from "react-router-dom";
export default function HostVanInfo() {
  const currentVan = useOutletContext();
  return (
    <div className="host-van-info">
      <h3 className="title">Name</h3>
      <p>{currentVan.name}</p>
      <h3 className="title">Type</h3>
      <p style={{ textTransform: "capitalize" }}>{currentVan.type}</p>
      <h3 className="title">Description</h3>
      <p>{currentVan.description}</p>
    </div>
  );
}
