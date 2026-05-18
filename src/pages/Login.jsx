import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        {
          email,
          password,
        }
      );

      alert(response.data);

      localStorage.setItem("token", "user-token");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert("Invalid Credentials");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button}>
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f2f2f2",
  },

  form: {
    background: "white",
    padding: "30px",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
  },

  button: {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    background: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Login;