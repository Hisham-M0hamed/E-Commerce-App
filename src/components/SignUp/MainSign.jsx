import { Container, useTheme } from "@mui/material";
// import SignInRegister from "./SignInRegister";
// import SignOneTime from "./SignOneTime";
import { Outlet } from "react-router";
import ImageSign from "./ImageSign";

const MainSign = () => {
  const theme = useTheme();

  // const handleClick = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
        },
      }}
    >
      <ImageSign />
      <div>
        <Outlet />
      </div>
    </Container>
  );
};

export default MainSign;
