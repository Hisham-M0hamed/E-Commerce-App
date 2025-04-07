import { useState } from "react";
import Drawer from "@mui/material/Drawer";

import { Close, Menu } from "@mui/icons-material";

import { Box, IconButton } from "@mui/material";
import Page from "./Page";
// @ts-ignore
import PageSmall from "./PageSmall";
const AllPageSmall = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer("top", true)}>
        <Menu />
      </IconButton>
      {/* <Menu /> */}
      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root": { height: "40%" } }}
      >
        {/* {list("top")} */}
        <Box
          sx={{
            maxWidth: "444px",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton
            sx={{
              margin: "20px 0 0 0",
              width: "30px",
              height: "30px",
            }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          <PageSmall />
        </Box>
      </Drawer>
    </div>
  );
};

export default AllPageSmall;
