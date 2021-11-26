import { useEffect, useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    Axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        // Login
        setIsLogin(true);
      } else {
        // Logout
        router.push("/login");
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const logout = () => {
    Axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  };

  return (
    <>
      admin
      {isLogin ? <Button onClick={logout}>Logout</Button> : null}
    </>
  );
}
