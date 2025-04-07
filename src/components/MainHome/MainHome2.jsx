import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import SwiperHome from "./SwiperHome";
import SwiperProducts from "./SwiperProducts";

const MainHome1 = () => {
  return (
    <Container>
      <Stack alignItems="center" direction={"row"} gap={2} mt={8}>
        <Paper
          sx={{ width: 10, height: 27, backgroundColor: "#DB4444" }}
        ></Paper>
        <Typography variant="body1" color="#DB4444" fontSize="small">
          Categories
        </Typography>
      </Stack>
      <Box>
        <Typography
          sx={{ fontSize: 30, m: 0, fontWeight: 500 }}
          variant="body1"
          color="initial"
        >
          Browse By Category
        </Typography>
      </Box>
      <Box sx={{ mt: "-26px" }}>
        <SwiperProducts />
      </Box>
    </Container>
  );
};

export default MainHome1;
