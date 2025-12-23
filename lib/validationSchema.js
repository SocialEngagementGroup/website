// validationSchema.js
import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  phone: yup.string().matches(/^[0-9+\-()\s]+$/).required(),
  email: yup.string().email().required(),
  business: yup.string().min(3).required(),
  message: yup.string().min(10).required(),
});