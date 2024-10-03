import { useState } from "react";

const TodoNew = (props) => {

  // useState hook
  const [valueInput, setValueInput] = useState("Vu Minh Quan");
  const { addNewTodo } = props;
  console.log(">>> check props", props);
  // const { addNewTodo } = props;
  // addNewTodo("Vu Minh Quan");

  const handleClick = () => {
    addNewTodo(valueInput);
  };

  const handlOnChange = (name) => {
    setValueInput(name);
  }
  return (
    <div className="todo-new">
      <input type="text"
      onChange={(event) => handlOnChange(event.target.value)} className="todo-input" />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
      <div>
        My text input is = {valueInput}
      </div>
    </div>
  );
};

export default TodoNew;
