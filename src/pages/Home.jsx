import React from "react";
import { Box } from "@mui/material";
import { useFetch } from "../auth/firebase";
import BlogForm from "../components/BlogForm";

const Home = () => {
  const { cards, isLoading } = useFetch();


  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      {isLoading ? (
        "Loading"
      ) : cards?.length === 0 ? (
        <Box
          width="45%"
          component="img"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/5/58/Kangal_dog_with_spikey_collar%2C_Turkey.jpg"
          }
        ></Box>
      ) : (
        cards?.map((card, index) => <BlogForm card={card} key={index} />)
      )}
    </Box>
  );
};

export default Home;
