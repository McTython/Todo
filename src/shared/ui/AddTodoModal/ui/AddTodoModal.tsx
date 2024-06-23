import { Input, Modal, Typography } from "antd";
import { IAddTodoModalProps } from "./interfaces/IAddTodoModalProps";
import { IAddTodoModal } from "./interfaces/IAddTodoModal";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { todoFormSchema } from "./config/todoFormSchema";
import { ITodo } from "@/shared/config/interfaces/ITodo";

const AddTodoModal = ({ open, setTodos, setOpen }: IAddTodoModalProps) => {
  const { handleSubmit, control } = useForm<IAddTodoModal>({
    resolver: yupResolver(todoFormSchema),
  });

  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleCancel = () => {
    console.log("handleCancel");
    setOpen(false);
  };

  const onSubmit = (data: IAddTodoModal) => {
    console.log("handleOk");
    setOpen(false);
    setConfirmLoading(false);
    setTodos((prev): ITodo[] => [
      ...prev,
      {
        id: Number(prev.length) + 1,
        title: data.title,
        todo: data.todo,
        completed: data.completed,
      },
    ]);
  };

  return (
    <Modal
      title="New Todo"
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

export default AddTodoModal;
