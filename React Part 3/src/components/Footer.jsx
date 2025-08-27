import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} CampusHub. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#2c3e50",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    marginTop: "2rem",
  },
};

export default Footer;
