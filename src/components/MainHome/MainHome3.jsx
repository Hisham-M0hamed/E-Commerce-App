import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 72,
  height: 75,
  borderRadius: "50%",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));
const MainHome3 = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        backgroundColor: "#222",
      }}
    >
      <Stack
        sx={{
          [theme.breakpoints.down("md")]: {
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          },
        }}
        direction={"row"}
        gap={5}
        alignItems={"center"}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            padding: "40px 10px",
            borderRadius: 12,
            // backgroundColor: "#333",
            color: "#fff",
            // order: { md: 2, lg: 1 },
          }}
        >
          <Typography my={5} variant="body1" color="#00FF66" fontSize="small">
            Categories
          </Typography>
          <Typography variant="h3" color="#fff">
            Enhance Your Music Experience
          </Typography>
          <Stack
            sx={{ justifyContent: { xs: "center", md: "left" } }}
            my={2}
            direction="row"
            spacing={2}
          >
            <DemoPaper sx={{ fontWeight: "bold" }} variant="outlined">
              05 Days
            </DemoPaper>
            <DemoPaper sx={{ fontWeight: "bold" }} variant="elevation">
              23 Hours
            </DemoPaper>
            <DemoPaper sx={{ fontWeight: "bold" }} variant="elevation">
              23 Minutes
            </DemoPaper>
            <DemoPaper sx={{ fontWeight: "bold" }} variant="elevation">
              23 Seconds
            </DemoPaper>
          </Stack>
          <Button
            sx={{
              width: "300px",
              color: "#fff",
              bgcolor: "#00FF66",
              padding: 3,
              //   textAlign: "center",
              borderRadius: 5,
              marginX: { xs: "auto", md: "0" },

              //   marginX: "auto",
              "&:hover": {
                backgroundColor: "#00CC66",
                color: "#333",
              },
            }}
          >
            Buy Now
          </Button>
        </Box>
        <Box>
          <img
            style={{ boxShadow: "5px 5px 15px #fff" }}
            width={400}
            src="src\images\speaker.png"
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default MainHome3;
