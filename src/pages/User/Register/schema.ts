import * as yup from "yup";
export const registerSchema = yup.object({
  user_name: yup
    .string()
    .required("Name is required.")
    .min(3, "Minium 3 characters is required")
    .trim(),
  user_email: yup
    .string()
    .required("Email is required.")
    .email("Invalid Email"),
  mobile_number: yup.string().required("Mobile Number is a required field."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Please enter minimum 8 characters ")
    .max(16, 'Password can"t be more than 16 characters'),
  confirm_password: yup
    .string()
    .required("Confirm Password is required.")
    .oneOf([yup.ref("password")], "Password must match"),
});
