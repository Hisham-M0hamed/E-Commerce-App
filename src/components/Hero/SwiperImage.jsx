import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./mySwiper.css";
// @ts-ignore
import Men from "../../images/banner-15.jpg";
// @ts-ignore
import Woman from "../../images/banner-25.jpg";
import { Pagination } from "swiper/modules";
import { Box, Container, Menu, Typography, useTheme } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";

const dataSwiper = [
  {
    id: "1",
    image: Men,
  },
  {
    id: "2",
    image: Woman,
  },
];
const SwiperImage = () => {
  const theme = useTheme();
  return (
    <Box>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="Image" />
              <Box
                sx={{
                  [theme.breakpoints.up("sm")]: {
                    position: "absolute",
                    top: "50%",
                    left: "20px",
                    transform: "translateY(-50%)",
                    borderRadius: "5px",
                    background: "rgba(153, 143, 143, 0.1)",
                    padding: "25px 15px 25px ",
                  },
                  [theme.breakpoints.down("sm")]: {
                    position: "absolute",
                    top: "50%",
                    left: "20px",
                    transform: "translateY(-50%)",
                    borderRadius: "5px",
                    background: "rgba(153, 143, 143, 0.1)",
                    padding: "25px 15px 25px ",
                    width: "180px",
                  },
                }}
              >
                <Typography variant="h5">Up to 10% off Voucher</Typography>
                <Typography
                  sx={{
                    textDecoration: "underLine",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                  variant="h5"
                >
                  Shop Now <KeyboardArrowRight />
                </Typography>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default SwiperImage;

// {
//   dataSwiper.map((item) => {
//     return (
//       <SwiperSlide key={item.link}>
//         <img src={item.link} alt="Image" />
//         <Box
//           sx={{
//             [theme.breakpoints.up("sm")]: {
//               position: "absolute",
//               top: "50%",
//               left: "20px",
//               transform: "translateY(-50%)",
//               borderRadius: "5px",
//               background: "rgba(153, 143, 143, 0.1)",
//               padding: "25px 15px 25px ",
//             },
//             [theme.breakpoints.down("sm")]: {
//               position: "absolute",
//               top: "50%",
//               left: "20px",
//               transform: "translateY(-50%)",
//               borderRadius: "5px",
//               background: "rgba(153, 143, 143, 0.1)",
//               padding: "25px 15px 25px ",
//               width: "180px",
//             },
//           }}
//         >
//           <Typography variant="h5">Up to 10% off Voucher</Typography>
//           <Typography
//             sx={{
//               textDecoration: "underLine",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               marginTop: "10px",
//               cursor: "pointer",
//             }}
//             variant="h5"
//           >
//             Shop Now <KeyboardArrowRight />
//           </Typography>
//         </Box>
//       </SwiperSlide>
//     );
//   });
// }
