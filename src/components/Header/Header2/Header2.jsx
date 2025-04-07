import { Box, Container, Stack, useMediaQuery } from "@mui/material";
// import React from "react";
// import { NavLink } from "react-router";
import Page from "./Page";
import SearchProduct from "./SearchProduct";
import AllPageSmall from "./AllPageSmall";

const Header2 = () => {
  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          alignItems: "center",
          padding: "10px",
          margin: "10px auto",
        }}
      >
        <Box sx={{ fontWeight: "bold", fontSize: "20px" }}>Exclusive</Box>
        <Box sx={{ flexGrow: ".4" }} />

        <Stack>{useMediaQuery("(min-width:800px)") && <Page />}</Stack>
        <Stack>{useMediaQuery("(max-width:800px)") && <AllPageSmall />}</Stack>
        <Box sx={{ flexGrow: ".4" }} />
        <Box>
          <SearchProduct />
        </Box>
      </Container>
    </Box>
  );
};
export default Header2;
