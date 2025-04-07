import Header2 from "./components/Header/Header2/Header2";
import Header1 from "./components/Header/Header1";
import { Box, Container } from "@mui/material";
import { Outlet } from "react-router";
import MainFooter from "./components/Footer/MainFooter";
const Root = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header1 />
      <Header2 />
      <div style={{ margin: "25px" }}>
        <Outlet />
      </div>
      <MainFooter />
    </Box>
  );
};

export default Root;
