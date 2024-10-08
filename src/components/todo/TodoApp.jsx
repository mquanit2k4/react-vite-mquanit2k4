import './todo.css';
import TodoNew from './TodoNew';
import TodoData from './TodoData';
import reactLogo from '../../assets/react.svg';
import { useState } from "react";

const TodoApp = () => {
    const [todoList, setTodoList] = useState([
      // { id: 1, name: "Learning React" },
      // { id: 2, name: "Watching Video" },
    ]);
  
    const randomIntFromInterval = (min, max) => {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
  
    const addNewTodo = (name) => {
      const newTodo = {
        id: randomIntFromInterval(1, 1000000),
        name: name,
      };
  
      setTodoList([...todoList, newTodo]);
      // array.push
    };
  
    const deleteTodo = (id) => {
      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList);
    };
    return (
      <div className="todo-container">
        <div className="todo-title"> Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo} // Truyen khac thuc thi
        />
        {todoList.length > 0 ? (
          <TodoData todoList={todoList} deleteTodo={deleteTodo} />
        ) : (
          <div className="todo-image">
            <img src={reactLogo} className="logo" />
          </div>
        )}
      </div>
    );
  };

  export default TodoApp;