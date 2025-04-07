// import { Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";
// import { Link } from "react-router";
// import { Link } from "@mui/material";

const dataPage = [
  {
    title: "Home",
  },
  {
    title: "About",
  },

  {
    title: "Contact",
  },
  {
    title: "SignUp",
  },
];

const PageSmall = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px 35px",
          padding: "10px",
          marginTop: "10px",
          //   border: "1px solid #ccc",
          //   borderRadius: "5px",
          width: "250px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        {dataPage.map((page) => {
          return (
            <li key={page.title} style={{ cursor: "pointer" }}>
              <NavLink className="nav-link" to={`/${page.title.toLowerCase()}`}>
                {page.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PageSmall;
