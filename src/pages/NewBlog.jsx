import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const NewBlog = () => {
  const [value, setValue] = useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        width: "250px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 1,
        border: "1px solid black",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Title" variant="standard" />
      <TextField id="standard-basic" label="Image URL" variant="standard" />
      <TextField
        id="outlined-multiline-flexible"
        label="Content"
        multiline
        maxRows={4}
        value={value}
        onChange={handleChange}
      />
    </Box>
  );
};

export default NewBlog;
