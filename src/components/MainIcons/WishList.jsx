import { AddShoppingCart } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  IconButton,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// @ts-ignore
import imagePlay from "../../images/play.png";
// @ts-ignore
import imageLed from "../../images/led.png";
// @ts-ignore
import imageCar from "../../images/car.png";
// @ts-ignore
import imageLapTop from "../../images/laptop.png";
// @ts-ignore
import imageShoes from "../../images/shoes.png";

import React from "react";
const dataWishList = [
  {
    id: "1",
    title: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$180",
    rating: 4,
    link: imagePlay,
  },
  {
    id: "2",
    title: "IPS LCD Gaming Monitor",
    price: "$800",
    oldPrice: "$940",
    rating: 5,
    link: imageLed,
  },
  {
    id: "3",
    title: "Kids Car",
    price: "$400",
    oldPrice: "$500",
    rating: 4.5,
    link: imageCar,
  },
  {
    id: "4",
    title: "FHD Gaming LapTop",
    price: "$1500",
    oldPrice: "$1800",
    rating: 4.8,
    link: imageLapTop,
  },
  {
    id: "5",
    title: "Jr.Zoom Soccer",
    price: "$1500",
    oldPrice: "$2000",
    rating: 4.3,
    link: imageShoes,
  },
];
const WishList = () => {
  return (
    <Container>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h6" color="initial">
          WishList
        </Typography>
        <Button
          sx={{
            padding: "7px 15px",
            textAlign: "center",
            fontSize: "medium",
            border: "1px solid #ccc",
            color: "#222",
          }}
        >
          Move All To Bag
        </Button>
      </Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
          gap: 2,
          margin: " 40px auto",
          justifyItems: "center",
        }}
      >
        {dataWishList.map((item) => {
          return (
            <Box>
              <Card
                key={item.id}
                sx={{
                  position: "relative",
                  maxWidth: 270,
                  textAlign: "center",
                }}
              >
                <CardActionArea>
                  <Tooltip
                    sx={{
                      position: "absolute",
                      top: 5,
                      right: 5,
                      backgroundColor: "#aaa",
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                    }}
                    title="Delete"
                  >
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
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
    </Container>
  );
};

export default WishList;
