import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>AuthApp</h2>

        <div>
          <Link to="/login">
            <button style={styles.loginBtn}>Login</button>
          </Link>

          <Link to="/register">
            <button style={styles.registerBtn}>Register</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.heading}>
          Welcome to Authentication App
        </h1>

        <p style={styles.text}>
          Secure Login & Registration System using React JS and Mysql
        </p>

        <div>
          <Link to="/login">
            <button style={styles.heroBtn}>Get Started</button>
          </Link>
        </div>
      </div>

      {/* Features */}
      <div style={styles.features}>
        <div style={styles.card}>
          <h3>Secure Login</h3>
          <p>Protected authentication system for users.</p>
        </div>

        <div style={styles.card}>
          <h3>mysql Storage</h3>
          <p>Stores all user data securely in database.</p>
        </div>

        <div style={styles.card}>
          <h3>React Dashboard</h3>
          <p>Modern responsive dashboard for users.</p>
        </div>
      </div>
    </div>
  );
  
}

const styles = {
  container: {
    fontFamily: "Arial",
    minHeight: "100vh",
    background: "#f5f7fb",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 50px",
    background: "#222",
    color: "white",
    alignItems: "center",
  },

  logo: {
    margin: 0,
  },

  loginBtn: {
    marginRight: "10px",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },

  registerBtn: {
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    background: "#4CAF50",
    color: "white",
  },

  hero: {
    textAlign: "center",
    marginTop: "100px",
  },

  heading: {
    fontSize: "50px",
    color: "#222",
  },

  text: {
    fontSize: "20px",
    color: "#555",
    marginBottom: "30px",
  },

  heroBtn: {
    padding: "15px 30px",
    fontSize: "18px",
    border: "none",
    background: "#007bff",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginTop: "80px",
    flexWrap: "wrap",
  },

  card: {
    background: "white",
    padding: "25px",
    width: "250px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
};


export default Landing;