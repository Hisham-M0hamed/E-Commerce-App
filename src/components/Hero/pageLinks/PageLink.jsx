import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { KeyboardArrowRight } from "@mui/icons-material";

const dataNoIcon = [
  {
    title: "Groceries & Pets",
  },
  {
    title: "Health & Beauty",
  },
  {
    title: "Electronics",
  },
  {
    title: "Home & Garden",
  },
  {
    title: "Baby’s & Toys",
  },
  {
    title: "Sports & Outdoors",
  },
];
const PageLink = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <nav aria-label="secondary mailbox folders">
        <List sx={{ fontSize: "13px", width: { sm: "240px" } }}>
          <ListItem sx={{ margin: "4px" }} disablePadding>
            <ListItemButton sx={{ gap: "17px" }}>
              Woman's Fashion <KeyboardArrowRight sx={{ fontSize: "18px" }} />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ margin: "4px" }} disablePadding>
            <ListItemButton sx={{ gap: "19px" }}>
              Men"s Fashion <KeyboardArrowRight sx={{ fontSize: "18px" }} />
            </ListItemButton>
          </ListItem>
          {dataNoIcon.map((item) => {
            return (
              <ListItem sx={{ margin: "4px" }} disablePadding key={item.title}>
                <ListItemButton sx={{ gap: "10px" }}>
                  {item.title}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </nav>
    </Box>
  );
};

export default PageLink;
