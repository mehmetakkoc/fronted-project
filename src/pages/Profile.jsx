import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useGlobalContext } from "../context/Context";

const Profile = () => {
  const { currentUser } = useGlobalContext();
  // console.log(currentUser.email);
  return (
    <Card sx={{ maxWidth: 345 }}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {currentUser.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {currentUser.displayName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Profile;
