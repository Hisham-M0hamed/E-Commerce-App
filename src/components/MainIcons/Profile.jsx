import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  OutlinedInput,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

const Profile = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        [theme.breakpoints.down("sm")]: {
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          gap: "10px",
        },
        display: "flex",
        justifyContent: "space-between",
        gap: 20,
      }}
    >
      <Box>
        <Box>
          <Typography fontWeight={"bold"} variant="h6" color="#333">
            Manage My Account
          </Typography>
          <Box sx={{ ml: 3 }}>
            <nav aria-label="secondary mailbox folders">
              <List sx={{ color: "#666" }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="My Profile" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="Address Back" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Box>
        <Box>
          <Typography fontWeight={"bold"} variant="h6" color="#333">
            My Order
          </Typography>
          <Box sx={{ ml: 3 }}>
            <nav aria-label="secondary mailbox folders">
              <List sx={{ color: "#666", m: 0 }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary="My Return" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component="a" href="#simple-list">
                    <ListItemText primary="My Cancellations" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
          <Box>
            <Typography fontWeight={"bold"} variant="h6" color="#333">
              My WishList
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Stack
          sx={{
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

              gap: "10px",
            },
          }}
          direction={"row"}
        >
          <Box>
            <FormControl variant="outlined">
              <FormHelperText id="outlined-weight-helper-text">
                First Name
              </FormHelperText>

              <OutlinedInput
                id="outlined-adornment-weight"
                fullWidth
                label="First Name"
                placeholder="First Name"
                sx={{ backgroundColor: "#eee", m: 1, width: "310px" }}
                //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl variant="outlined">
              <FormHelperText id="outlined-weight-helper-text">
                Last Name
              </FormHelperText>

              <OutlinedInput
                id="outlined-adornment-weight"
                fullWidth
                placeholder="Last Name"
                label="Last Name"
                sx={{ backgroundColor: "#eee", m: 1, width: "310px" }}
                //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>
        </Stack>
        <Stack
          sx={{
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            },
          }}
          direction={"row"}
        >
          <Box>
            <FormControl variant="outlined">
              <FormHelperText id="outlined-weight-helper-text">
                Email
              </FormHelperText>

              <OutlinedInput
                id="outlined-adornment-weight"
                fullWidth
                label="Email"
                placeholder="Email Address"
                sx={{ backgroundColor: "#eee", m: 1, width: "310px" }}
                //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>
          <Box>
            <FormControl variant="outlined">
              <FormHelperText id="outlined-weight-helper-text">
                Address
              </FormHelperText>

              <OutlinedInput
                id="outlined-adornment-weight"
                fullWidth
                label="Address"
                placeholder="Address"
                sx={{ backgroundColor: "#eee", m: 1, width: "310px" }}
                //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>
        </Stack>
        <Box>
          <Box
            sx={{
              [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                my: 4,
              },
            }}
          >
            <FormControl variant="outlined">
              <FormHelperText id="outlined-weight-helper-text">
                Password Changes
              </FormHelperText>

              <OutlinedInput
                id="outlined-adornment-weight"
                fullWidth
                placeholder="Current Password"
                label="Current Password"
                sx={{ backgroundColor: "#eee", m: 1, width: "310px" }}
                //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
            <FormControl variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                fullWidth
                placeholder="New Password"
                label="New Password"
                sx={{ backgroundColor: "#eee", m: 1, width: "310px" }}
                //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
            <FormControl variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                fullWidth
                placeholder="Confirm New Password"
                label="Confirm Password"
                sx={{ backgroundColor: "#eee", m: 1, width: "310px" }}
                //   endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Box>
        </Box>
        <Box
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              flexDirection: "column-reverse",
              alignItems: "center",
              my: 4,
            },
          }}
        >
          <Button
            sx={{
              padding: "1px 40px",
              textAlign: "center",
              fontSize: "small",
              border: "1px solid #fff",
              backgroundColor: "#aaa",
              color: "#444",
              height: 50,
              mx: 5,
              my: 2,
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              padding: "1px 40px",
              textAlign: "center",
              fontSize: "small",
              border: "1px solid #ccc",
              backgroundColor: "#DB4444",
              color: "#fff",
              height: 50,
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
