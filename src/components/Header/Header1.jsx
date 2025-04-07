import { Box, Container, ListItem, Stack, Typography } from "@mui/material";
import { useState } from "react";
import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { KeyboardArrowDown } from "@mui/icons-material";

const options = ["Arabic", "English"];
const Header1 = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#222",
        justifyContent: "space-between",
        alignItems: "center",
        height: "40px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "40px",
        }}
      >
        <Box></Box>
        <Stack>
          <Typography
            sx={{ fontSize: "11px", color: "#fff", textAlign: "center" }}
          >
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </Typography>
        </Stack>
        <Box>
          <List component="nav" aria-label="Device settings">
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" } }}
            >
              <ListItemText
                //   primary=""
                sx={{
                  ".MuiTypography-root ": { color: "#fff", fontSize: "12px" },
                }}
                secondary={options[selectedIndex]}
              />
              <KeyboardArrowDown sx={{ color: "#fff" }} />
            </ListItem>
          </List>
          <Menu
            //   sx={{  }}
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "13px", p: "3px 10px", color: "#333" }}
                key={option}
                //   disabled={index === 0}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};

export default Header1;
