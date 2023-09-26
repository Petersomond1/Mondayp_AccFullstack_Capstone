
import { useState } from "react";
// import ".src/App.css";
import Register from "./Register";
import Authenticate from "./Authenticate";

function LoginApp() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Register token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default LoginApp;
