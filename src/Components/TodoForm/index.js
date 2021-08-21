import React, { useState, useEffect } from "react";

function TodoForm(props) {
  const { addTodo , itemUpdate, updateTodo} = props;
  const [name, setName] = useState("");
  const [id, setId] = useState("")
  
  useEffect(() => {
     setName(itemUpdate.name)
     setId(itemUpdate.id)
     
  }, [itemUpdate])
  const handleClickAdd = () => {
      if(id){
          updateTodo(id, name)
         
      }
      else{
          addTodo(name);

      }
    setName("")
    setId("")
  };
  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="todo__form">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập công việc"
          aria-describedby="helpId"
          onChange={handleChangeValue}
          value={name}
        />
        <button className="btn" onClick={handleClickAdd}>
         {id ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
}

export default TodoForm;
