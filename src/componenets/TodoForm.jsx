import { useState } from 'react'
import PropTypes from 'prop-types';

function TodoForm({ task, isEdit, addTodo, editTodoList }) {
    const [todo, setTodo] = useState(task?.task ? task?.task : '');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            setTodo(task?.task);
            editTodoList({ ...task, task: todo, isEditable: false });
        }
        else {
            addTodo(todo);
        }
        setTodo('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="add Todo" value={todo || ''} onChange={(event) => setTodo(event.target.value)} />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

TodoForm.propTypes = {
    isEdit: PropTypes.bool,
    task: PropTypes.object,
    addTodo: PropTypes.func,
    editTodoList: PropTypes.func
}

export default TodoForm