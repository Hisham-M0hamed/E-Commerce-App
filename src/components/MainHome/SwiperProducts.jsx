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
import { Box, Button, Container, Paper, Rating, Stack } from "@mui/material";
import {
  AddShoppingCart,
  CameraAlt,
  Headphones,
  Laptop,
  PhoneIphone,
  SportsEsports,
  Watch,
} from "@mui/icons-material";
// import image1 from "../../images/play.png";
const dataHome = [
  {
    id: "1",
    title: "Camera",
    price: "$120",
    oldPrice: "$180",
    rating: 4,
    icon: <CameraAlt />,
  },
  {
    id: "2",
    title: "Headphones",
    price: "$800",
    oldPrice: "$940",
    rating: 5,
    icon: <Headphones />,
  },
  {
    id: "3",
    title: "Phone",

    icon: <PhoneIphone />,
  },
  {
    id: "4",
    title: "Watch",

    icon: <Watch />,
  },
  {
    id: "5",
    title: "Laptop",
    icon: <Laptop />,
  },
  {
    id: "5",
    title: "Gaming",
    icon: <SportsEsports />,
  },
];

const SwiperProducts = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      breakpoints={{
        440: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        840: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      navigation
      pagination={{ clickable: true }}
    >
      {dataHome.map((data) => {
        return (
          <SwiperSlide key={data.id}>
            <Paper
              sx={{ marginTop: 0, width: 200, p: 6, border: "1px solid #ccc" }}
            >
              {/* <Laptop fontSize="large" sx={{ mb: 3 }} /> */}
              <Box fontSize="large" sx={{ mb: 3 }}>
                {data.icon}
              </Box>
              <Typography variant="h6" component="h6">
                {data.title}
              </Typography>
            </Paper>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default SwiperProducts;
