import * as yup from "yup";

export const contactusSchema = yup.object({
  name: yup
    .string()
    .required("Name is a required field.")
    .min(3, "Minimum 3 characters is required."),
  email: yup
    .string()
    .required("Email is a required field.")
    .email("Invalid email."),
  mobileNo: yup
    .string()
    .required("Mobile Number is a required field.")
    .length(10, "Mobile Number should be 10 characters."),
  message: yup
    .string()
    .required("Message is a required field.")
    .min(20, "Minimum 20 characters is required"),
});
