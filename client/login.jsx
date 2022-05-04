import * as React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "./globals/LoginContext.jsx";

function Login({ config }) {
  return (
    <div>
      <h1>Login</h1>
      <LoginButton label={"Login with Google"} config={config} />
    </div>
  );
}

function LoginButton({ config, label }) {
  async function handleLogin() {
    const { authorization_endpoint, response_type, scope, client_id } = config;
    /*
        const state = randomString(30);
        const loginState = { state };
        sessionStorage.setItem("loginState", JSON.stringify(loginState));
    */
    const params = {
      response_type,
      client_id,
      //state,
      scope,
      redirect_uri: `${window.location.origin}/login/callback`,
    };

    window.location.href =
      authorization_endpoint + "?" + new URLSearchParams(params);
  }

  return (
    <div>
      <button onClick={handleLogin}>{label}</button>
    </div>
  );
}

function LoginCallback({ reload }) {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const { registerLogin } = useContext(LoginContext);

  useEffect(async () => {
    const { access_token, state } = Object.fromEntries(
      new URLSearchParams(window.location.hash.substring(1))
    );
    console.log(access_token);

    /*
        const loginState = JSON.parse(sessionStorage.getItem("loginState"));
        if (!state || loginState.state !== state) {
          setError("You do not have authorization");
          return;
        }
         */

    if (access_token) {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ access_token }),
      });

      if (!response.ok) {
        setError(
          `Failed to fetch token ${response.status}: ${await response.text()}`
        );
        return;
      }
      await registerLogin({ access_token });
      reload();
      navigate("/");
    }
  });

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div>
      <h1>Please wait...</h1>
    </div>
  );
}

function LogOut({ reload }) {
  const navigate = useNavigate();
  const { logout } = useContext(LoginContext);
  useEffect(async () => {
    await logout();
    reload();
    navigate("/");
  });

  return <h1>Please wait...</h1>;
}

export function LoginPage({ config, reload }) {
  return (
    <Routes>
      <Route path={""} element={<Login config={config} />} />
      <Route path={"/callback"} element={<LoginCallback reload={reload} />} />
      <Route path={"/logout"} element={<LogOut reload={reload} />} />
      <Route path={"*"} element={<Login config={config} />} />
    </Routes>
  );
}
