import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Checkbox,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router";
const SignOneTime = () => {
  const handleSubmit = () => {};

  return (
    <Container sx={{ width: "400px", margin: "0" }}>
      <Paper elevation={10} sx={{ marginTop: "15px", padding: "20px" }}>
        <Avatar
          sx={{ mx: "auto", bgcolor: "#ccc", textAlign: "center", mb: 1 }}
        ></Avatar>
        <Typography variant="h4" color="initial" sx={{ textAlign: "center" }}>
          Sign Up
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ textAlign: "center" }}
        >
          Create a new account
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder="Enter UserName"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter Your Gmail"
            fullWidth
            required
            // autoFocus
            sx={{ mb: 2 }}
          />
          <TextField
            placeholder="Enter Password"
            fullWidth
            required
            type="password"
            sx={{ mb: 2 }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember Me"
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Sign in
          </Button>
        </Box>
        <Grid
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" color="initial">
            Already have an account?
          </Typography>
          <Grid item>
            <Link component={RouterLink} to="login">
              Login
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SignOneTime;
