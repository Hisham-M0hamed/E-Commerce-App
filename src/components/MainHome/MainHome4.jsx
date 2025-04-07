import React from "react";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import OurProduct4 from "./OurProduct4";

const MainHome4 = () => {
  return (
    <Container>
      <Stack alignItems="center" direction={"row"} gap={2} mt={8}>
        <Paper
          sx={{ width: 10, height: 27, backgroundColor: "#DB4444" }}
        ></Paper>
        <Typography variant="body1" color="#DB4444" fontSize="small">
          Our Products
        </Typography>
      </Stack>
      <Box>
        <Typography
          sx={{ fontSize: 30, m: 0, fontWeight: 500 }}
          variant="body1"
          color="initial"
        >
          Explore Our Products
        </Typography>
      </Box>
      <Box sx={{ my: 6 }}>
        <OurProduct4 />
      </Box>
    </Container>
  );
};

export default MainHome4;
