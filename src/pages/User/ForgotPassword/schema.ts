import * as yup from "yup";

export const forgotSchema = yup.object({
  emailId: yup
    .string()
    .required("EmailId field is required.")
    .email("EmailId must be a valid email id."),
});
