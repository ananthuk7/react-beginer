
import PropTypes from 'prop-types'
function TodoList({ todo, deleteTodo, editTodo }) {
    // console.log(todo);
    return (
        <li>
            <h3>{todo.task}</h3>
            <button onClick={() => editTodo(todo.id)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}

TodoList.propTypes = {
    todo: PropTypes.object,
    deleteTodo: PropTypes.func,
    editTodo: PropTypes.func
}

export default TodoList