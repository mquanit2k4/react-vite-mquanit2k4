const TodoNew = (props) => {
  console.log(">>> check props", props);
  // const { addNewTodo } = props;
  // addNewTodo("Vu Minh Quan");

  const handleClick = () => {
    alert("Click me");
  };

  const handlOnChange = (name) => {
    console.log(">>> check input", name);
  }
  return (
    <div className="todo-new">
      <input type="text"
      onChange={(event) => handlOnChange(event.target.value)} className="todo-input" />
      <button style={{ cursor: "pointer" }} onClick={handleClick}>
        Add
      </button>
    </div>
  );
};

export default TodoNew;
