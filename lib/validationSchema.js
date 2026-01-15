// validationSchema.js
import * as yup from "yup";


export const schema = yup.object().shape({
  name: yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9()+\s-]+$/, "Use only numbers, spaces, +, -, and parentheses"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  business: yup.string().min(3, "Business name must be at least 3 characters").required("Business is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});