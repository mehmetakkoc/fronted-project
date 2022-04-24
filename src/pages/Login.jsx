import { Box, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";
import { Formik } from "formik";
import { LoginValidationSchema } from "../components/LoginValidationSchema";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        container: "fluid",
      }}
    >
      <Box
        maxWidth="400px"
        sx={{
          m: 2,
          p: 2,
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "fit-content",
          boxShadow: "10px 10px 5px 5px #333131a9",
          borderRadius: "16px",
        }}
      >
        <Box
          width="200px"
          height="200px"
          sx={{
            borderRadius: "16px",
            bgcolor: "#816838",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            width="200px"
            component="img"
            src={"https://blogcw.netlify.app/static/media/blok.7e6674a5.png"}
          ></Box>
        </Box>

        <Typography
          variant="h5"
          component="h1"
          sx={{ mb: 2, color: "#056582", fontWeight: "bold" }}
        >
          Login
        </Typography>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginValidationSchema}
          onSubmit={(values, actions) => {
            alert(`
             email: ${values.email}
             password: ${values.password}
            `);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <LoginForm {...props} />}
        ></Formik>
      </Box>
    </Box>
  );
};

export default Login;
