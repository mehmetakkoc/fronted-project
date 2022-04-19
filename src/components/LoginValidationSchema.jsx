import * as yup from "yup";

export const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("First name is required")
    .min(2, "Too Short")
    .max(15, "Must be 15 char or less"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Must be more than 8 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have a uppercase")
    .matches(/[!?.*@$#%&^()-+]+/, "Password must have a special character"),
});
