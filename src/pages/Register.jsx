import { Container, Box, Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { deepPurple } from "@mui/material/colors";
import { Formik } from "formik";
import LoginForm from "../components/LoginForm";
import { LoginValidationSchema } from "../components/LoginValidationSchema";

const Register = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: deepPurple[500], m: 2 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Register
        </Typography>

        <Formik
          initialValues={{
            userName: "",
            password: "",
          }}
          validationSchema={LoginValidationSchema}
          onSubmit={(values, actions) => {
            alert(`userName: ${values.userName}          
               password: ${values.password}
            `);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <LoginForm {...props} />}
        ></Formik>
      </Box>
    </Container>
  );
};

export default Register;
