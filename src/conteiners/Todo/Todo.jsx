import React from "react";

import "./todo.css";

import { CloseOutlined } from "@ant-design/icons";
import { notification } from "antd";

import { TodoInput, TodoItem } from "../../components";

import moment from "moment/moment";

notification.config({
  placement: "topRight",
  bottom: 50,
  duration: 5,
  maxCount: 2,
  closeIcon: <CloseOutlined style={{ fontSize: "1.6rem", color: "white" }} />,
});

const Todo = () => {
  const [todoList, setTodoList] = React.useState(() => {
    const savedTodos = localStorage.getItem("storageTodos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const openError = () => {
    const errorMessage = {
      message: "Слишком много задач!",
      duration: 7,
    };
    notification.open(errorMessage);
  };

  const addTodo = (todo) => {
    let deadline = null;

    if (todo.deadline) deadline = moment(todo.deadline).format("x");

    if (todoList.length < 10) {
      const id = Date.now().toString();

      const updatedTodoList = [
        { ...todo, id: id, deadline: deadline },
        ...todoList,
      ];

      setTodoList((val) => (val = updatedTodoList));

      localStorage.setItem("storageTodos", JSON.stringify(updatedTodoList));
    } else {
      openError();
    }
  };

  const deleteTodo = (e) => {
    const filteredTodoList = todoList.filter((todo) => {
      return todo.id !== e.currentTarget.id;
    });

    setTodoList((newVal) => (newVal = filteredTodoList));

    if (filteredTodoList.length === 0) localStorage.removeItem("storageTodos");

    else localStorage.setItem("storageTodos", JSON.stringify(filteredTodoList));
  };

  return (
    <div className="todo">
      <TodoInput addTodo={addTodo} />
      {todoList?.map((item) => {
        return (
          <TodoItem
            key={item.id}
            todo={item.todo}
            itemId={item.id}
            deadline={item.deadline}
            deleteTodo={deleteTodo}
          />
        );
      })}
      {todoList.length === 0 ? (
        <p className="todo__tasks">Пока нет никаких задач</p>
      ) : (
        <p className={`${todoList.length < 9 ? "todo__tasks" : "todo-error"}`}>
          Задач на сегодня {todoList.length} из 10
        </p>
      )}
    </div>
  );
};

export default Todo;
