import { Input, Modal, Typography } from "antd";
import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ITodo } from "@/shared/config/interfaces/ITodo";
import { editTodoModalSchema } from "../config/editTodoModalSchema";
import { IEditTodoModalProps } from "./interfaces/IEditTodoModalProps";
import { IEditTodoModal } from "./interfaces/IEditTodoModal";

const EditTodoModal = ({
  todo,
  open,
  setTodos,
  setOpen,
  setIsCompleted,
}: IEditTodoModalProps) => {
  const { handleSubmit, control, reset } = useForm<IEditTodoModal>({
    resolver: yupResolver(editTodoModalSchema),
  });

  const [confirmLoading, setConfirmLoading] = useState(false);

  useEffect(() => {
    reset({
      title: todo.title,
      todo: todo.todo,
      completed: todo.completed,
    });
    return () => {
      reset();
    };
  }, [todo, reset]);

  const handleCancel = () => {
    console.log("handleCancel");
    setOpen(false);
  };

  const onSubmit = (data: IEditTodoModal) => {
    console.log("handleOk");
    setOpen(false);
    setConfirmLoading(false);
    setTodos((prev): ITodo[] =>
      [
        ...prev.filter((prev) => prev.id !== todo.id),
        {
          id: todo.id,
          title: data.title,
          todo: data.todo,
          completed: data.completed,
        },
      ].sort((a, b) => a.id - b.id),
    );
    setIsCompleted(data.completed);
  };

  return (
    <Modal
      title="Edit Todo"
      open={open}
      onOk={handleSubmit(onSubmit)}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <Controller
        control={control}
        name={"title"}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Typography>Title</Typography>
            <Input
              value={value}
              name={"title"}
              placeholder={"Input todo's title"}
              onChange={onChange}
              status={error && "error"}
            />
            {error && (
              <Typography color={"#e74c3c"}>{error.message}</Typography>
            )}
          </div>
        )}
      />
      <Controller
        control={control}
        name={"todo"}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
              gap: "5px",
            }}
          >
            <Typography>Todo</Typography>
            <Input
              value={value}
              name={"todo"}
              placeholder={"Input todo"}
              onChange={onChange}
              status={error && "error"}
            />
            {error && (
              <Typography color={"#e74c3c"}>{error.message}</Typography>
            )}
          </div>
        )}
      />
      <Controller
        control={control}
        name={"completed"}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <div>
            <input
              name={"completed"}
              type="checkbox"
              checked={value}
              onChange={onChange}
              style={{ width: "20px" }}
            />
            {error && (
              <Typography color={"#e74c3c"}>{error.message}</Typography>
            )}
          </div>
        )}
      />
    </Modal>
  );
};

export default EditTodoModal;
