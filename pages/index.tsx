import type { NextPage } from "next";
import Link from "next/link";
import { useAuthActions, useAuthState } from "../components/auth";

const Home: NextPage = () => {
  const { user } = useAuthState();
  const { logout } = useAuthActions();

  return (
    <div>
      <h1>Hello {user?.name || "Guest"}</h1>
      {user ? (
        <div>
          <div style={{ marginBottom: "10px" }}>
            <Link href="/account">
              <a style={{ textDecoration: "underline" }}>View Account Info</a>
            </Link>
          </div>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Link href="/login">Log in</Link>
      )}
    </div>
  );
};

export default Home;
