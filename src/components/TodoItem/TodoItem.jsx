import React from "react";
import moment from "moment/moment";
import localization from "moment/locale/ru";
import "./todoitem.css";

import { DeleteFilled } from "@ant-design/icons";
import { Button } from "antd";

moment.updateLocale("ru", localization);

const TodoItem = (props) => {
  const { todo, itemId, deleteTodo, deadline } = { ...props };

  const timeRemaining = moment(parseInt(deadline)).fromNow();

  return (
    <>
      <div className="todo__item">
        <div className="todo__item__text">
          <span>{todo}</span>
        </div>
        <div className="todo__item__control">
          <Button
            className="todo__item__control__remove"
            id={itemId}
            onClick={deleteTodo}
            style={{ backgroundColor: "#6C718C" }}
            icon={<DeleteFilled style={{ color: "rgb(255 146 53)" }} />}
          />
        </div>
        <div className="todo__item__deadline">
          {deadline && <p>Дедлаин: {timeRemaining}</p>}
        </div>
      </div>
    </>
  );
};

export default TodoItem;
