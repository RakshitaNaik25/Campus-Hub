import React from "react";

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Campus Events</h1>
    </header>
  );
}

const styles = {
  header: {
    width: "1440px",
    padding: "1rem 2rem",
    backgroundColor: "#1976d2",
    color: "white",
    display: "flex",
    justifyContent: "center", // centers the title
    alignItems: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },

  title: {
    fontSize: "1.8rem",
    margin: 0,
  },
};

export default Header;
