const TodoData = (props) => {

  const {todoList, deleteTodo} = props;
  
  const handleClick = (id) => {
    deleteTodo(id);
  };

  console.log(">>> check props", todoList);
  return (
    <div className="todo-data">
      {todoList.map((todo => {
        return (
          <div className="todo-item" key={todo.id}>
            <div> {todo.name} </div>
            <button
            style={{ cursor: "pointer" }}
            // get id when click delete button 
            onClick={() => handleClick(todo.id) }>Delete</button>
          </div>
        );
      }))}
    </div>

  );
};

export default TodoData;
