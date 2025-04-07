import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
// @ts-ignore
import React from "react";
// @ts-ignore
import PlayStation from "../../images/playStation.png";
// @ts-ignore
import CapImage from "../../images/cap.jpeg";

// @ts-ignore
import SpeakerSmall from "../../images/speaker2.png";
// @ts-ignore
import Perfume from "../../images/Perfume.png";

const MainHome5 = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        [theme.breakpoints.down("md")]: {
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          gap: "10px",
          marginX: "auto",
        },
        // border: "1px solid red",
      }}
    >
      <Stack width="100%" direction={"row"} gap={6}>
        <Box
          sx={{ position: "relative", display: { xs: "none", lg: "block" } }}
        >
          <Box sx={{ backgroundColor: "#111", height: "740px" }}>
            <img width={400} src={PlayStation} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "65%",
              left: "20px",
              color: "#fff",
            }}
          >
            <Box width="250px">
              <Typography variant="body1" color="#fff" fontSize={"large"}>
                Play Station 5
              </Typography>
              <Typography
                my={1}
                variant="body1"
                color="#aaa"
                fontSize={"small"}
              >
                Black and White version of the PS5 coming out on sale.
              </Typography>
              <Typography
                sx={{ textDecoration: "underline", my: 2 }}
                variant="body1"
                color="#fff"
              >
                Shop Now
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box sx={{ position: "relative" }}>
            <Box sx={{ backgroundColor: "#111", height: "370px" }}>
              <img width={330} src={CapImage} />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "65%",
                left: "20px",
                color: "#fff",
              }}
            >
              <Box width="250px">
                <Typography variant="body1" color="#fff" fontSize={"large"}>
                  Woman's Collection
                </Typography>
                <Typography
                  my={1}
                  variant="body1"
                  color="#aaa"
                  fontSize={"small"}
                >
                  Featured woman collections that give you another vibe.{" "}
                </Typography>
                <Typography
                  sx={{ textDecoration: "underline", my: 2 }}
                  variant="body1"
                  color="#fff"
                >
                  Shop Now
                </Typography>
              </Box>
            </Box>
          </Box>
          <Stack
            sx={{
              [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "column",
                justifyItem: "center",
                gap: "10px",
              },
            }}
            direction={"row"}
            gap={2}
          >
            <Box>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ backgroundColor: "#111", height: "360px" }}>
                  <img width={300} src={SpeakerSmall} />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: "65%",
                    left: "20px",
                    color: "#fff",
                  }}
                >
                  <Box width="250px">
                    <Typography variant="body1" color="#fff" fontSize={"large"}>
                      Woman's Collection
                    </Typography>
                    <Typography
                      my={1}
                      variant="body1"
                      color="#aaa"
                      fontSize={"small"}
                    >
                      Featured woman collections that give you another vibe.{" "}
                    </Typography>
                    <Typography
                      sx={{ textDecoration: "underline", my: 2 }}
                      variant="body1"
                      color="#fff"
                    >
                      Shop Now
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box sx={{ position: "relative" }}>
                <Box sx={{ backgroundColor: "#111", height: "360px" }}>
                  <img width={300} src={Perfume} />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: "65%",
                    left: "20px",
                    color: "#fff",
                  }}
                >
                  <Box width="250px">
                    <Typography variant="body1" color="#fff" fontSize={"large"}>
                      Perfume
                    </Typography>
                    <Typography
                      my={1}
                      variant="body1"
                      color="#aaa"
                      fontSize={"small"}
                    >
                      Featured woman collections that give you another vibe.{" "}
                    </Typography>
                    <Typography
                      sx={{ textDecoration: "underline", my: 2 }}
                      variant="body1"
                      color="#fff"
                    >
                      Shop Now
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default MainHome5;
