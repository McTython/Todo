import { useState } from "react";
import { Button, Dropdown, MenuProps } from "antd";
import TodoCard from "@/entities/TodoCard/ui/TodoCard";
import { ITodo } from "@/shared/config/interfaces/ITodo";
import useGetTodos from "@/widgets/TodoList/module/useGetTodos";
import { DownOutlined } from "@ant-design/icons";
import AddTodoModal from "@/shared/ui/AddTodoModal/ui/AddTodoModal";

import styles from "./TodoList.module.scss";

const TodoList = (): React.ReactElement => {
  const { todos, setTodos } = useGetTodos();
  const [open, setOpen] = useState(false);
  const [choosenMenu, setChoosenMenu] = useState("All");

  const showModal = () => {
    setOpen(true);
  };

  const items: MenuProps["items"] = [
    {
      label: "All",
      key: 1,
    },
    {
      label: "Completed",
      key: 2,
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "1") {
      setChoosenMenu("All");
    }
    if (e.key === "2") {
      setChoosenMenu("Completed");
    }
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className={styles.root}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Button type="primary" onClick={showModal}>
            Add Task
          </Button>{" "}
        </div>
        <Dropdown menu={menuProps}>
          <Button>
            {choosenMenu}
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className={styles.todos__list}>
        {todos
          .filter((a) => {
            if (choosenMenu === "All") return a;
            else if (choosenMenu === "Completed") return a.completed;
            return a;
          })
          .map((todo: ITodo) => (
            <TodoCard todo={todo} setTodos={setTodos} key={todo.id} />
          ))}
      </div>
      <AddTodoModal open={open} setOpen={setOpen} setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
