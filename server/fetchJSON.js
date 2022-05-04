import fetch from "node-fetch";

export async function fetchJSON(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed: ${response.status}`);
  }
  return await response.json();
}
