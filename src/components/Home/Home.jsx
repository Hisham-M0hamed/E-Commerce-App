import React from "react";
import SwiperImage from "../../components/Hero/SwiperImage";
import PageLink from "../../components/Hero/pageLinks/PageLink";
import { Box, Container, Stack } from "@mui/material";
import MainHome1 from "../../components/MainHome/MainHome1";
import MainHome2 from "../../components/MainHome/MainHome2";
import MainHome3 from "../../components/MainHome/MainHome3";
import MainHome4 from "../../components/MainHome/MainHome4";
import MainHome5 from "../../components/MainHome/MainHome5";

const Home = () => {
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <PageLink />
        <Box
          sx={{
            textAlign: "center",
            mx: "auto",
            width: "700px",
            overflow: "hidden",
          }}
        >
          <SwiperImage />
        </Box>
      </Box>
      <Box sx={{ my: 10 }}>
        <MainHome1 />
        <MainHome2 />
        <MainHome3 />
        <MainHome4 />
        <MainHome5 />
      </Box>
    </Container>
  );
};

export default Home;
