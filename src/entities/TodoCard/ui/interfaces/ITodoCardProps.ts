import { ITodo } from "@/shared/config/interfaces/ITodo";
import { Dispatch, SetStateAction } from "react";

export interface ITodoCardProps {
  todo: ITodo;
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}
