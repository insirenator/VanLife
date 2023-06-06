export async function getVans() {
  const res = await fetch("/api/vans");
  console.log(res);
  if (!res.ok) {
    throw {
      message: "failed to fetch vans",
    };
  }
  const data = await res.json();
  return data.vans;
}
