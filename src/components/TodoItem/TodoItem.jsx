import React from 'react'

import './todoitem.css'

import { DeleteTwoTone } from "@ant-design/icons";
import { Button } from 'antd'

const TodoItem = (props) => {
    console.log(typeof(props.itemId))
    const {todo, itemId, deleteTodo} = {...props}
  return (
    <div key={itemId} className='todo__item'>
        <p>{todo}</p>
        <Button id={itemId} onClick={deleteTodo} icon={<DeleteTwoTone />}/>
    </div>
  )
}

export default TodoItem