import { ITodo } from "@/shared/config/interfaces/ITodo";
import { Dispatch, SetStateAction } from "react";

export interface IEditTodoModalProps {
  todo: ITodo;
  open: boolean;
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
  setOpen: (e: boolean) => void;
  setIsCompleted: Dispatch<SetStateAction<boolean>>;
}
