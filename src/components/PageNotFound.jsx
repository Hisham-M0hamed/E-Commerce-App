import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        color: "#333",
        fontWeight: 600,
        padding: "20px",
        margin: "0 auto",
        cursor: "pointer",
        transition: "background-color 0.3s ease",

        alignItems: "center",
        height: "50vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1>404 Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link
        style={{
          color: "#fff",
          textDecoration: "none",
          marginTop: "20px",
          backgroundColor: "#DB4444",
          padding: "10px 15px",
          borderRadius: "5px",
          fontWeight: 600,
          transition: "background-color 0.3s ease",
          cursor: "pointer",
        }}
        to="/"
      >
        Back to Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
