import * as yup from "yup";

export const todoFormSchema = yup.object().shape({
  title: yup.string().required(),
  todo: yup.string().required(),
  completed: yup.boolean().default(false).required(),
});
