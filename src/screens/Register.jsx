import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ setToken }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fakestoreapi.com/auth/Register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      const result = await response.json();
      console.log("Register Result: ", result);
      setToken(result.token);
      setSuccessMessage(result.message);
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}

      <div className="login">
        <Link to="/">
          <img
            className="login_logo"
            src="https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20login%20logopng.png?updatedAt=1695417141012"
            alt=""
          />
        </Link>
        <div className="login_container">
          <h1>Create Account</h1>
          <form>
            <h4>Your name</h4>
            <input
              type="name"
              value={name} id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <h4>Mobile Number or Email</h4>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4> Password: </h4>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <h4>Re-enter password: </h4>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <div className="signinbutton_grid">
              <button type="submit" className="login-_signinButton">
                Continue
              </button>
            </div>
            <p>
              By creating an account, you agree to Amazon's Conditions of Use
              and Privacy Notice.
            </p>
            <p>Already have an Account?</p>
            <p>Sign in</p>
            <p>Buying for work? Create a free business account</p>
          </form>
        </div>
      </div>

      <form onSubmit={handleSubmit}></form>
    </div>
  );
}
