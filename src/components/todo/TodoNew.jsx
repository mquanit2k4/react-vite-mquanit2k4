
const TodoNew = (props) => {
    console.log(">>> check props", props);
    const {addNewTodo} = props;
    addNewTodo('Vu Minh Quan');
    return (
        <div className="todo-new">
        <input type="text" className="todo-input" />
        <button className="todo-button">Add</button>
      </div>
    )
}

export default TodoNew;