import { ITodoCardProps } from "./interfaces/ITodoCardProps";
import { useState } from "react";

import styles from "./TodoCard.module.scss";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import EditTodoModal from "@/features/EditTodoModal/ui/EditTodoModal";

const TodoCard = ({ todo, setTodos }: ITodoCardProps) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.completed);
  const [open, setOpen] = useState(false);

  const handleCheckbox = (e) => {
    setIsCompleted((prev) => !prev);
    setTodos((prev) =>
      [
        ...prev.filter((prev) => prev.id !== todo.id),
        {
          ...todo,
          completed: !isCompleted,
        },
      ].sort((a, b) => a.id - b.id),
    );
  };

  const deleteTodo = () => {
    setTodos((prev) => [...prev.filter((prev) => prev.id !== todo.id)]);
  };

  return (
    <div className={styles.root}>
      <div className={styles.left__card}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCheckbox}
          style={{ width: "20px" }}
        />
        <div>
          <p>{todo.title}</p>
          <p>{todo.todo}</p>
        </div>
      </div>
      <div className={styles.right__card}>
        <button type="button" onClick={deleteTodo}>
          <DeleteFilled />
        </button>{" "}
        <button type="button" onClick={() => setOpen(true)}>
          <EditFilled />
        </button>
      </div>
      <EditTodoModal
        open={open}
        setOpen={setOpen}
        todo={todo}
        setTodos={setTodos}
        setIsCompleted={setIsCompleted}
      />
    </div>
  );
};

export default TodoCard;
