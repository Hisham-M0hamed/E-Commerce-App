// @ts-ignore
import image1 from "../../images/laptop.png";
// @ts-ignore
import image2 from "../../images/camera.png";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  // @ts-ignore
  InputAdornment,
  ListItem,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
// @ts-ignore
import React from "react";

const dataForm = [
  {
    text: "First Name",
  },
  {
    text: "Last Name",
  },
  {
    text: "Email",
  },
  {
    text: "Password",
  },
  {},
  {
    text: "Phone",
  },
  {
    text: "Address",
  },
];
const CheckOut = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          alignItems: "center",
        },
        display: "flex",
        justifyContent: "space-between",
        gap: 7,
      }}
    >
      <Box>
        {dataForm.map((item) => {
          return (
            <Box key={item.text}>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <FormHelperText id="outlined-weight-helper-text">
                  {item.text}
                </FormHelperText>

                <OutlinedInput
                  id="outlined-adornment-weight"
                  fullWidth
                  sx={{ m: 1, width: "310px" }}
                  //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
              </FormControl>
            </Box>
          );
        })}
        <FormControlLabel
          control={<Checkbox value="remember" color="secondary" />}
          label="Save this information for faster check-out next time"
        />
      </Box>
      <Box flexGrow={0.5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img width={70} src={image1} />
            <Typography fontSize="medium" variant="h5">
              LapTop
            </Typography>
            <Box flexGrow={0.7} />

            <Typography fontSize="small" variant="body1" color="initial">
              $750
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img width={70} src={image2} />
            <Typography fontSize="medium" variant="h5">
              Camera
            </Typography>
            <Box flexGrow={0.7} />
            <Typography fontSize="small" variant="body1" color="initial">
              $950
            </Typography>
          </Box>
        </Box>
        <Box>
          <Divider component="li" />
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontSize={"small"} variant="body1" color="initial">
              SubTotal
            </Typography>
            <Typography fontSize={"small"} variant="body1" color="initial">
              $1700
            </Typography>
          </ListItem>
          <Divider component="li" />
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontSize={"small"} variant="body1" color="initial">
              Shipping
            </Typography>
            <Typography fontSize={"small"} variant="body1" color="initial">
              Free
            </Typography>{" "}
          </ListItem>
          <Divider component="li" />
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontSize={"small"} variant="body1" color="initial">
              Total
            </Typography>
            <Typography fontSize={"small"} variant="body1" color="initial">
              $1700
            </Typography>
          </ListItem>
          <Box sx={{ my: 3, display: "flex", flexDirection: "column" }}>
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Bank"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Cash on delivery"
            />
          </Box>
          <Stack
            my={3}
            sx={{
              [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                justifyContent: "center",
                // gap: "10px",
                // alignItems: "center",
              },
            }}
            direction={"row"}
            alignItems={"center"}
          >
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="Coupon Code"
              variant="outlined"
            />
            <Button
              sx={{
                padding: "2px 40px",
                textAlign: "center",
                fontSize: "small",
                border: "1px solid #ccc",
                backgroundColor: "#DB4444",
                color: "#fff",
                height: 50,
              }}
            >
              Apply Coupon
            </Button>
          </Stack>
          <Button
            sx={{
              padding: "2px 40px",
              textAlign: "center",
              fontSize: "small",
              border: "1px solid #ccc",
              backgroundColor: "#DB4444",
              color: "#fff",
              height: 50,
            }}
          >
            Place Order
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CheckOut;
