import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
const App = () => {

  const [todoList, setTodoList] = useState([
    {id: 1, name: "Learning React"}, 
    {id: 2, name: "Watching Video"},
  ]);
  const QuanVM = "Vu Minh Quan K67"; 
  const age = 20;
  const data = {
    name: "Vu Minh Quan",
    age: 20,
  };

  const addNewTodo = (name) => {
    alert(`>> Call me ${name}`);
  };

  return (
    <div className="todo-container">
      <div className="todo-title"> Todo List</div>
      <TodoNew
      addNewTodo = {addNewTodo} // Truyen khac thuc thi 
      />
      <TodoData 
      name = {QuanVM}
      age = {age}
      data = {data}
      todoList = {todoList}
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};

export default App;
