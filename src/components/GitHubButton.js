import React from "react";
import { FaGithub } from "react-icons/fa";

const GitHubButton = ({ url = "https://github.com/n-dcool" }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
    >
      <FaGithub style={styles.icon} />
    </a>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    borderRadius: "50%",
    backgroundColor: "#333",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    textDecoration: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    zIndex: "9999",
    transition: "transform 0.3s ease-in-out",
    cursor: "pointer",
  },
  icon: {
    fontSize: "24px",
  },
};

export default GitHubButton;
