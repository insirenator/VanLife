import { useOutletContext } from "react-router-dom";
export default function HostVanPricing() {
  const { price } = useOutletContext();
  return (
    <>
      <h1>${price}/day</h1>
    </>
  );
}
