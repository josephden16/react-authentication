import type { NextPage } from "next";
import { useState } from "react";
import { useAuthActions, useAuthState } from "../components/auth";

const Login: NextPage = () => {
  const { loginError, isLoggingIn } = useAuthState();
  const { login } = useAuthActions();
  const [state, setState] = useState({ email: "", password: "" });

  const handleLogin = () => {
    if (!(state.email && state.password)) return;
    const { email, password } = state;
    login(email, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <div>{loginError && `Error: ${loginError}`}</div>
      <form onSubmit={(evt) => evt.preventDefault()}>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={(evt) => setState({ ...state, email: evt.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(evt) =>
              setState({ ...state, password: evt.target.value })
            }
          />
        </div>
        <div>
          <button onClick={!isLoggingIn ? handleLogin : undefined}>
            {isLoggingIn ? "Loading..." : "Log in"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
