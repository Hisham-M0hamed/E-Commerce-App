import Footer1 from "./Footer1";
import { Box, Container } from "@mui/material";

const MainFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#222",
        // justifyContent: "space-between",
        // alignItems: "center",
        // position: "absolute",
        // width: "100%",
        // bottom: "0",
        marginTop: "auto",
      }}
    >
      <Container>
        <Footer1 />
      </Container>
    </Box>
  );
};

export default MainFooter;
