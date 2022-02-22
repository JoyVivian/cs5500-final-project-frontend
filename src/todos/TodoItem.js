const TodoItem = ({todo, removeTodo, changeTodo}) => {
  return(
    <li className="p-2 list-group-item">
      <input
        onClick={(e) => changeTodo({
          ...todo, done: e.target.checked
        })}
        type="checkbox"
        checked={todo.done}/>
      {todo.title}
      <button onClick={() => removeTodo(todo)}
              className="btn btn-sm btn-danger float-end">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;