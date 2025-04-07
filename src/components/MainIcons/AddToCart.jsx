import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { NavLink } from "react-router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

//Last Section Cart Total
const style = {
  p: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const columns = [
  { id: "name", label: "Product Name", Width: 150 },
  { id: "price", label: "Price", Width: 60 },
  {
    id: "quantity",
    label: "Quantity",
    Width: 50,
    align: "right",
  },
  { id: "total", label: "Total", Width: 60 },
];

function createData(name, price, quantity, total) {
  // @ts-ignore
  return { name, price, quantity, total };
}
const rows = [
  createData("LapTop", "$200", 2, "$400"),
  createData("Shoes", "$200", 2, "$400"),
  createData("Phone", "$200", 2, "$400"),
];
const AddToCart = () => {
  const theme = useTheme();
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };
  return (
    <Container>
      <Stack>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      // @ts-ignore
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {/* .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) */}
                {rows.map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            // @ts-ignore
                            align={column.align}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Paper>
      </Stack>
      <Stack
        sx={{ my: 2 }}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button
          sx={{
            padding: "7px 15px",
            textAlign: "center",
            fontSize: "medium",
            border: "1px solid #ccc",
          }}
        >
          <NavLink style={{ color: "#333" }} to="/home">
            {" "}
            Return To Shop
          </NavLink>{" "}
        </Button>
        <Button
          sx={{
            padding: "7px 15px",
            textAlign: "center",
            fontSize: "medium",
            border: "1px solid #ccc",
            color: "#333",
          }}
        >
          Update Cart
        </Button>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{
          my: 8,
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
      >
        <Stack
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
        <Box sx={{ border: "1px solid #aaa", padding: 4, width: 350 }}>
          <List sx={style} aria-label="mailbox folders">
            <ListItem>
              <Typography variant="h4" color="initial">
                Cart Total
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
                SubTotal
              </Typography>
              <Typography fontSize={"small"} variant="body1" color="initial">
                $1750
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
                $1750
              </Typography>
            </ListItem>
            <NavLink to="checkout">
              <Button
                sx={{
                  padding: "2px 40px",
                  textAlign: "center",
                  fontSize: "small",
                  border: "1px solid #ccc",
                  backgroundColor: "#DB4444",
                  color: "#fff",
                  height: 50,
                  mt: 2,
                }}
              >
                Process to Checkout
              </Button>
            </NavLink>
          </List>
        </Box>
      </Stack>
    </Container>
  );
};

export default AddToCart;
