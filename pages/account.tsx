import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useAuthState } from "../components/auth";

const Account: NextPage = () => {
  const router = useRouter();
  const { user } = useAuthState();

  // navigate to the home page if unauthenticated
  if (!user) {
    router.push("/");
  }

  return (
    <div>
      <div>Name: {user?.name}</div>
      <div>User Id: {user?.id}</div>
      <div>Email: {user?.email}</div>
    </div>
  );
};

export default Account;
