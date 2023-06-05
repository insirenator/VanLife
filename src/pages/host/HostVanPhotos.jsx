import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
  const { imageUrl } = useOutletContext();
  return (
    <>
      <div>
        <img src={imageUrl} width={150} />
      </div>
    </>
  );
}
