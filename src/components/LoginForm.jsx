import { Grid, TextField, Button, Link } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Form } from "formik";

const LoginForm = (props) => {
  console.log(props);
  const { values, handleChange, handleBlur, errors, touched } = props;
  return (
    <Form>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            id="username"
            label="username"
            name="username"
            variant="outlined"
            type="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            label="password"
            name="password"
            variant="outlined"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ bgcolor: deepPurple[500] }}
          >
            Signup
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ bgcolor: deepPurple[500] }}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export default LoginForm;
