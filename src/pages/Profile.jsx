import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <Box
    
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          maxWidth: "500px",
          minWidth: "275px",
          height: "fit-content",
          margin: "5rem",
          p: 3,
          bgcolor: "#615f77",
          boxShadow: "10px 10px 5px 5px #a07676a9",
        }}
      >
        <Avatar
          sx={{
            bgcolor: deepPurple[500],
            width: "100px",
            height: "100px",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          {currentUser.displayName?.toUpperCase()[0] || currentUser.email?.[0]}
        </Avatar>
        <CardContent sx={{ m: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "1rem",
            }}
          >
            Display Name
          </Typography>
          <Typography
            variant="body2"
            color="black"
            sx={{
              fontSize: "1.3rem",
            }}
          >
            {currentUser.displayName || currentUser.email?.split("@")[0]}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "1rem",
            }}
          >
            Email
          </Typography>
          <Typography variant="body2" color="black">
            {currentUser?.email}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
