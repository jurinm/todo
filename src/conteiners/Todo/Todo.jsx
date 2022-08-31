import React from "react";

import "./todo.css";
import { notification } from "antd";
import { TodoInput, TodoItem } from "../../components";

const Todo = () => {
  const [todoList, setTodoList] = React.useState(() => {
    const savedTodos = localStorage.getItem("storageTodos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  notification.config({
    placement: "topRight",
    bottom: 50,
    duration: 5,
    maxCount: 2,
  });

  const openError = () => {
    const errorMessage = {
      message: "Слишком много задач!",
      duration: 7,
      maxCount: 2,
    };
    notification.error(errorMessage);
  };

  const addTodo = (todo) => {
    if (todoList.length < 10) {
      const id = Date.now().toString();
      const updatedTodoList = [{ ...todo, id: id }, ...todoList];
      setTodoList((val) => (val = updatedTodoList));
      console.log(todoList);
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
    else JSON.stringify(...filteredTodoList);
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
            deleteTodo={deleteTodo}
          />
        );
      })}
      {todoList.length === 0 ? (
        <p>Пока нет никаких задач</p>
      ) : (
        <p>Задач на сегодня {todoList.length} из 10</p>
      )}
    </div>
  );
};

export default Todo;
