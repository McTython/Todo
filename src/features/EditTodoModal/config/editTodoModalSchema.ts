import * as yup from "yup";

export const editTodoModalSchema = yup.object().shape({
  title: yup.string().required(),
  todo: yup.string().required(),
  completed: yup.boolean().default(false).required(),
});
