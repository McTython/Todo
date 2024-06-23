import { ITodo } from "@/shared/config/interfaces/ITodo";
import { useEffect, useState } from "react";
import { todoMock } from "@/shared/config/todoMock";

const useGetTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodos = () => {
    return todoMock;
  };

  useEffect(() => {
    (() => {
      setTodos(getTodos);
    })();
  }, []);

  return { todos, setTodos };
};

export default useGetTodos;
