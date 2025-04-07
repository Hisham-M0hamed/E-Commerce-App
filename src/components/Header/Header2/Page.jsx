// @ts-nocheck

import React from "react";
import { NavLink } from "react-router";

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
const Page = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "5px 35px",
        }}
      >
        {dataPage.map((page) => {
          return (
            <li key={page.title} style={{ cursor: "pointer" }}>
              <NavLink
                className="nav-link"
                end
                to={`/${page.title.toLowerCase()}`}
              >
                {page.title}
              </NavLink>
            </li>
          );
        })}
        {/* <li style={{ cursor: "pointer" }}>
          <Link
            sx={{
              textDecoration: "none",
              color: "#555",
              ":hover": { textDecoration: "underLine", color: "#222" },
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            sx={{
              textDecoration: "none",
              color: "#555",
              ":hover": { textDecoration: "underLine", color: "#222" },
            }}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            sx={{
              textDecoration: "none",
              color: "#555",
              ":hover": { textDecoration: "underLine", color: "#222" },
            }}
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            sx={{
              textDecoration: "none",
              color: "#555",
              ":hover": { textDecoration: "underLine", color: "#222" },
            }}
            to="/SignUp"
          >
            Sign Up
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Page;
