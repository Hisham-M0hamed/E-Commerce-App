// @ts-nocheck
// import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Box, Container, Rating, Stack } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
// import image1 from "../../images/play.png";
const dataHome = [
  {
    id: "1",
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$180",
    rating: 4,
    link: "src/images/play.png",
  },
  {
    id: "2",
    title: "IPS LCD Gaming Monitor",
    price: "$800",
    oldPrice: "$940",
    rating: 5,
    link: "src/images/led.png",
  },
  {
    id: "3",
    title: "Kids Car",
    price: "$400",
    oldPrice: "$500",
    rating: 4.5,
    link: "src/images/car.png",
  },
  {
    id: "4",
    title: "FHD Gaming LapTop",
    price: "$1500",
    oldPrice: "$1800",
    rating: 4.8,
    link: "src/images/laptop.png",
  },
  {
    id: "5",
    title: "Jr.Zoom Soccer",
    price: "$1500",
    oldPrice: "$2000",
    rating: 4.3,
    link: "src/images/shoes.png",
  },
];
const SwiperHome = () => {
  //   const [swiperRef, setSwiperRef] = useState(null);

  return (
    <Container>
      <Swiper
        // onSwiper={setSwiperRef}
        // slidesPerView={1}
        breakpoints={{
          440: { slidesPerView: 1 },
          725: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {dataHome.map((data) => {
          return (
            <SwiperSlide key={data.id} className="swiper-slide2">
              <Card sx={{ Width: 370, border: "1px solid #ccc" }}>
                <CardActionArea>
                  <Box>
                    <img src={data.link} />
                  </Box>

                  <CardContent
                    sx={{
                      textAlign: "left",
                      borderTop: "1px solid #ccc",
                      backgroundColor: "#eee",
                    }}
                  >
                    <Typography
                      fontSize={"medium"}
                      variant="h5"
                      color="#111"
                      my={1}
                    >
                      {data.title}
                    </Typography>
                    <Stack direction={"row"} gap={5}>
                      <Typography
                        fontSize="large"
                        variant="body2"
                        sx={{ color: "#DB4444" }}
                      >
                        {data.price}
                      </Typography>
                      <Typography
                        variant="body2"
                        fontSize="large"
                        sx={{ textDecoration: " line-through", color: "#555" }}
                      >
                        {data.oldPrice}
                      </Typography>
                    </Stack>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      mt={2}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#333",
                          color: "#ddd",
                          padding: 1,
                          borderRadius: 3,
                          ":hover ": { backgroundColor: "#aaa", color: "#222" },
                        }}
                        display="flex"
                        alignItems="center"
                      >
                        <AddShoppingCart />

                        <Typography variant="body2">Add to Cart</Typography>
                      </Box>
                      <Rating
                        size="small"
                        name="read-only"
                        precision={0.5}
                        value={data.rating}
                        readOnly
                      />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SwiperHome;
{
  /* <SwiperSlide className="swiper-slide2">
          <Card sx={{ maxWidth: 340, border: "1px solid #ccc" }}>
            <CardActionArea>
            //    <CardMedia
                // className="image"
                // component="img"
                // height="140"
                // image="src\images\play.png"
                // width={100}
                // alt="green iguana"
            //   /> 
              <Box>
                <img src="src/images/play.png" />
              </Box>
              <CardContent
                sx={{
                  textAlign: "left",
                  borderTop: "1px solid #ccc",
                  backgroundColor: "#eee",
                }}
              >
                <Typography
                  fontSize={"medium"}
                  variant="h5"
                  color="#111"
                  my={1}
                >
                  HAVIT HV-G92 Gamepad
                </Typography>
                <Stack direction={"row"} gap={5}>
                  <Typography
                    fontSize="large"
                    variant="body2"
                    sx={{ color: "#DB4444" }}
                  >
                    $120
                  </Typography>
                  <Typography
                    variant="body2"
                    fontSize="large"
                    sx={{ textDecoration: " line-through", color: "#555" }}
                  >
                    $180
                  </Typography>
                </Stack>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={2}
                >
                  <Box
                    sx={{
                      backgroundColor: "#333",
                      color: "#ddd",
                      padding: 1,
                      borderRadius: 3,
                      ":hover ": { backgroundColor: "#aaa", color: "#222" },
                    }}
                    display="flex"
                    alignItems="center"
                  >
                    <AddShoppingCart />

                    <Typography variant="body2">Add to Cart</Typography>
                  </Box>
                  <Rating size="small" name="read-only" value={4} readOnly />
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */
}
