import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import SwiperHome from "./SwiperHome";

const MainHome1 = () => {
  return (
    <Container>
      <Stack alignItems="center" direction={"row"} gap={2}>
        <Paper
          sx={{ width: 10, height: 27, backgroundColor: "#DB4444" }}
        ></Paper>
        <Typography variant="body1" color="#DB4444" fontSize="small">
          Today's
        </Typography>
      </Stack>
      <Box sx={{ my: 3 }}>
        <Typography
          sx={{ fontSize: 30, fontWeight: 500 }}
          variant="body1"
          color="initial"
        >
          Flash Sales
        </Typography>
      </Box>
      <Box>
        <SwiperHome />
      </Box>
    </Container>
  );
};

export default MainHome1;
