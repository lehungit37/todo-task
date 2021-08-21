import TodoForm from "./Components/TodoForm/index";
import TodoList from "./Components/TodoList/index";
import "./App.scss";
import { useState, useEffect } from "react";
import firebase from "./Firebase/config";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [itemUpdate, setItemUpdate] = useState();
  const dataRef = firebase.firestore().collection("todolist");

  useEffect(() => {
    const unsubscribe = dataRef.orderBy("createAt").onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodoList(documents);
    });

    return unsubscribe;
  }, []);

  const addTodo = (name) => {
    if (name) {
      dataRef.doc().set({
        name,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } else {
      alert("Add fail");
    }
  };
  const deleteTodo = (idDelete) => {
    dataRef
      .doc(idDelete)
      .delete()
      .then(() => {
        alert("Delete success");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const getItemUpdate = (item) => {
    setItemUpdate(item);
  };

  const updateTodo = (id, name) => {
    dataRef
      .doc(id)
      .update({
        name: name,
      })
      .then(() => console.log("Update Success"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h3 className="header">Welcome to React-Hooks from Hung Le</h3>
      <TodoForm
        updateTodo={updateTodo}
        itemUpdate={itemUpdate}
        addTodo={addTodo}
      />
      <TodoList
        getItemUpdate={getItemUpdate}
        todoList={todoList}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
