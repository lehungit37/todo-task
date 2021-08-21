import React from "react";

function TodoList({ todoList, deleteTodo, getItemUpdate }) {
  const handleDeleteTodo = (id)=>{
        deleteTodo(id)
  }

  const handleGetItemUpdate = (item)=>{
    getItemUpdate(item)
  }
  return (
    <div className="todo__list">
      <h5 className="header">Danh sách</h5>
      <ul className="list">
        {todoList.map((todoItem) => {
          return (
            <li key={todoItem.id} className="item">
              <span>{todoItem.name}</span>
              <div className="control">
                <div className="btn-control" onClick = {(item)=>handleGetItemUpdate(todoItem)} >Sửa</div>
                <div className="btn-control" onClick = {(id)=>handleDeleteTodo(todoItem.id)}>Xoá</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
