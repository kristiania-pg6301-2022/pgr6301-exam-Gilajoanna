import { useLoader } from "../globals/useLoader";
import { fetchJSON } from "../globals/fetchJSON";
import * as React from "react";

export function UserProfile({ user }) {
  const { loading, error } = useLoader(async () => {
    return await fetchJSON("/api/login");
  });

  if (loading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Error! {error.toString()}</div>;
  }

  return (
    <div>
      <h1>
        Profile for {user.name} ({user.email}){" "}
      </h1>
      <div>
        <img src={user.picture} alt={"Profile image"} />
      </div>
    </div>
  );
}
