import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useGlobalContext } from "../context/Context";

const Home = () => {
  const { list } = useGlobalContext();
  console.log(list);

  return (
    <Card
      sx={{
        // maxWidth: 345,
        marginTop: 3,
        
      }}
    >
      <CardActionArea
        sx={{ display: "flex", alignItems: "center", justifyContent: "center",gap:1 }}
      >
        {list.map((item, id) => (
          <>
            <CardMedia
              key={item.id}
              component="img"
              height="140"
              image={item.img}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.text}
              </Typography>
            </CardContent>{" "}
          </>
        ))}
      </CardActionArea>
    </Card>
  );
};

export default Home;
