import React from "react";

import "./todoinput.css";

import { CloseSquareTwoTone, PlusSquareTwoTone } from "@ant-design/icons";
import { Input, Button, Form } from "antd";

const TodoInput = (props) => {
  const { addTodo} = { ...props };
    const [form] = Form.useForm();
  return (
    <>
      <Form
      form={form}
        onFinish={(e) => {
            addTodo(e)
            form.resetFields()}}
        style={{ display: "flex", width: "100%", gap: "1rem" }}
      >
        <Form.Item style={{display: "block", width: "100%",}} name="todo">
          <Input style={{width: "100%",}}
            allowClear={{ clearIcon: <CloseSquareTwoTone /> }}
            placeholder="Type your task here"
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">
            <PlusSquareTwoTone />
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TodoInput;
