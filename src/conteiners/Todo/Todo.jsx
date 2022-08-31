import React from "react";

import "./todo.css";

import { TodoInput, TodoItem } from "../../components";

const Todo = () => {
  const [todoList, setTodoList] = React.useState(() => {
    const savedTodos = localStorage.getItem("storageTodos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const addTodo = (todo) => {
    const id = Date.now().toString();

    setTodoList((val) => (val = [...todoList, { ...todo, id: id }]));

    localStorage.setItem(
      "storageTodos",
      JSON.stringify([...todoList, { ...todo, id: id }])
    );
  };

  const deleteTodo = (e) => {
    const filteredTodoList = todoList.filter((todo) => {
      return todo.id !== e.currentTarget.id;
    });

    setTodoList((newVal) => (newVal = filteredTodoList));
    if (filteredTodoList.length === 0 ) localStorage.removeItem("storageTodos");
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
    </div>
  );
};

export default Todo;
