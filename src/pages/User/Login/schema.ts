import * as yup from "yup";

export const loginSchema = yup.object({
  emailId: yup
    .string()
    .required("Email ID is a required field.")
    .email("EmailID must be a valid email"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Minimum 8 characters is required.")
    .max(16),
});
