import { ITodo } from "@/shared/config/interfaces/ITodo";
import { Dispatch, SetStateAction } from "react";

export interface IAddTodoModalProps {
  open: boolean;
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
  setOpen: (e: boolean) => void;
}
