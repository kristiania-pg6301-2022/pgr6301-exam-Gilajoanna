import { Link } from "react-router-dom";
import * as React from "react";

export function NotFound() {
  return (
    <div>
      <h1>Page not found</h1>
      <div>
        <Link to={"/"}>Back to home page</Link>
      </div>
    </div>
  );
}
