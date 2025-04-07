// import React from "react";
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import { Box, Button, Container, Rating, Stack } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const dataHome4 = [
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
    rating: 4.3,
    link: "src/images/shoes.png",
  },
];
const OurProduct4 = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: 2,
          margin: " 0 auto",
          justifyItems: "center",
        }}
      >
        {dataHome4.map((item) => {
          return (
            <Box>
              <Card key={item.id} sx={{ maxWidth: 270, textAlign: "center" }}>
                <CardActionArea>
                  <img width={200} src={item.link} />
                  <CardContent>
                    <Typography
                      textAlign={"left"}
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontSize={"medium"}
                    >
                      {item.title}
                    </Typography>
                    <Stack gap={3} direction={"row"} alignItems={"center"}>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.price}
                      </Typography>
                      <Rating
                        precision={0.5}
                        name="read-only"
                        value={item.rating}
                        readOnly
                      />
                    </Stack>
                    <Box
                      sx={{
                        backgroundColor: "#333",
                        color: "#ddd",
                        padding: 1,
                        mt: 2,
                        width: "180px",
                        textAlign: "center",
                        borderRadius: 3,
                        ":hover ": { backgroundColor: "#aaa", color: "#222" },
                      }}
                      display="flex"
                      alignItems="center"
                    >
                      <AddShoppingCart />

                      <Typography variant="body2">Add to Cart</Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ marginX: "auto", textAlign: "center" }}>
        <Button
          sx={{
            backgroundColor: "#DB4444",
            color: "#fff",
            fontSize: "small",
            padding: "10px 20px",
            mt: 6,
          }}
        >
          View All Projects
        </Button>
      </Box>
    </Container>
  );
};

export default OurProduct4;

<Swiper
  slidesPerView={3}
  grid={{
    rows: 2,
  }}
  spaceBetween={30}
  pagination={{
    clickable: true,
  }}
  modules={[Grid, Pagination]}
  className="mySwiper"
>
  <SwiperSlide></SwiperSlide>
  <SwiperSlide>Slide 2</SwiperSlide>
  <SwiperSlide>Slide 3</SwiperSlide>
  <SwiperSlide>Slide 4</SwiperSlide>
  <SwiperSlide>Slide 5</SwiperSlide>
  <SwiperSlide>Slide 6</SwiperSlide>
  <SwiperSlide>Slide 7</SwiperSlide>
  <SwiperSlide>Slide 8</SwiperSlide>
  <SwiperSlide>Slide 9</SwiperSlide>
</Swiper>;
