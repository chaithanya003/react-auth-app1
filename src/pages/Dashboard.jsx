import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to Dashboard</h1>

      <button style={styles.button} onClick={logout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },

  button: {
    padding: "12px 20px",
    marginTop: "20px",
    border: "none",
    background: "red",
    color: "white",
    cursor: "pointer",
  },
};

export default Dashboard;