export async function deleteJSON(url, body) {
  const response = await fetch(url, {
    method: "delete",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}
