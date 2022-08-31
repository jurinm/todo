import React from 'react'

import './todo.css'

import { TodoInput,TodoItem } from '../../components'

const Todo = () => {
    const [todoList, setTodoList] = React.useState([])
    
    console.log(todoList)
    const addTodo = (todo) => {
        const id = Date.now().toString();
        setTodoList([...todoList, {...todo, id:id}])
    };

    const deleteTodo = (e) => {
        console.log(e.currentTarget)
        const filteredTodoList = todoList.filter(todo => {
            return todo.id !== e.currentTarget.id;
          });
        console.log(filteredTodoList)

        setTodoList(newVal => newVal = filteredTodoList)
    }

  return (
    <div className='todo'>
        <TodoInput addTodo={addTodo} />
        {todoList?.map((item) => {return <TodoItem key={item.id} todo={item.todo} itemId={item.id} deleteTodo={deleteTodo} />})}
    </div>
  )
}

export default Todo