import React from "react";
import "./about.css";
// @ts-ignore
import Image from "../../images/about.jpeg";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import {
  AssuredWorkload,
  Bookmark,
  MonetizationOn,
  Paid,
} from "@mui/icons-material";
const cards = [
  {
    id: 1,
    icon: <Paid />,
    title: "25K",
    description: "Anual gross sale in our site",
  },
  {
    id: 2,
    icon: <MonetizationOn />,

    title: "33K",
    description: "Mopnthly Produduct Sale",
  },
  {
    id: 3,
    icon: <AssuredWorkload />,
    title: "45K",
    description: "Customer active in our site for survival.",
  },
  {
    id: 4,
    icon: <Bookmark />,
    title: "10.5K",
    description: "Sallers active our site.",
  },
  {
    id: 5,
    icon: <Bookmark />,
    title: "10.5K",
    description: "Sallers active our site.",
  },
];
const About1 = () => {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <div className="all-component">
      <div className="section-one">
        <div className="text">
          <h2>Our Story</h2>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <Box flexGrow={1} />
        <div>
          <img src={Image} />
        </div>
      </div>
      <div className="section-two">
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 4,
            margin: "80px auto 40px auto",
          }}
        >
          {cards.map((card, index) => (
            <Card>
              <CardActionArea
                onClick={() => setSelectedCard(index)}
                data-active={selectedCard === index ? "" : undefined}
                sx={{
                  height: "100%",
                  "&[data-active]": {
                    backgroundColor: "action.selected",
                    "&:hover": {
                      backgroundColor: "action.selectedHover",
                    },
                  },
                }}
              >
                <CardContent sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px",
                      fontSize: "25px",
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default About1;
