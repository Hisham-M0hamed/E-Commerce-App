// import { CheckBox } from "@mui/icons-material";
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
import React from "react";
import { Link as RouterLink } from "react-router";
const SignInRegister = () => {
  const handleSubmit = () => {};

  return (
    <Container sx={{ width: "400px", margin: "0" }}>
      <Paper elevation={10} sx={{ marginTop: "15px", padding: "20px" }}>
        <Avatar
          sx={{ mx: "auto", bgcolor: "#ccc", textAlign: "center", mb: 1 }}
        ></Avatar>
        <Typography variant="h4" color="initial" sx={{ textAlign: "center" }}>
          Sign In
        </Typography>
        <Typography
          variant="body1"
          color="initial"
          sx={{ textAlign: "center" }}
        >
          Sign in to your account
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
        <Grid sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Grid item>
            <Link component={RouterLink} to="forgot">
              Forgot Password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="register">
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SignInRegister;

// import { useAuth0 } from "@auth0/auth0-react";
// const { loginWithRedirect } = useAuth0();

// <button onClick={() => loginWithRedirect()}>Log In</button>;
