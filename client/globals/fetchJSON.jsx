import { Link } from "react-router-dom";

export async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(
      `Failed to load articles ${res.status}: ${res.statusText}` +
      <Link to={"/"}>Try again</Link>
    );
  }
  return await res.json();
}
