import React from "react";

import "./todoinput.css";

import { ClearOutlined, CloseCircleTwoTone } from "@ant-design/icons";
import { Input, Button, Form } from "antd";

const TodoInput = (props) => {
  const { addTodo } = { ...props };
  const [form] = Form.useForm();
  const validateMessages = {
    required: "'${name}' is required!",
    // ...
  };
  return (
    <>
      <Form

        form={form}
        onFinish={(e) => {
          addTodo(e);
          form.resetFields();
        }}
        style={{ width: "100%", gap: "1rem" }}
      >
        <Form.Item
        rules={[
          {
            required: true,
            message: 'Поле не может быть пустым.',
          },
        ]}
        
          style={{ display: "block", width: "100%", marginBottom: "1.3rem" }}
          name="todo"
        >
          <Input
          
          showCount
            maxLength={68}
            style={{ width: "100%" }}
            autoComplete="off"
            allowClear={{clearIcon:<ClearOutlined style={{ fontSize: '1.6rem'}} />}}
            placeholder="Что нужно сделать?"
          />
        </Form.Item>
        <Form.Item>
          <Button className="todo__input__button" style={{ display: "block", width: "100%" }} htmlType="submit">
            Добавить задачу
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TodoInput;
