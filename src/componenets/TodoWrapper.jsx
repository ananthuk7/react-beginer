import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './TodoForm';
import TodoList from './TodoList';



function TodoWrapper() {

    const [todos, setTodos] = useState([]);

    function addTodos(todo) {
        // console.log(todo, todos);
        setTodos([...todos, { id: uuidv4(), task: todo, isEditable: false, completed: false }]);
    }
    function deleteTodos(id) {
        // console.log(id, todos);
        const filteredTodos = todos.filter((task) => task.id !== id);
        console.log(id, todos, filteredTodos);
        setTodos(filteredTodos)
    }
    function editTodo(id) {
        const editableTodos = todos.map((task) => {
            return (task.id === id ?
                { ...task, isEditable: true } : task)
        })
        // console.log(id, todos, editableTodos);
        setTodos(editableTodos)

    }
    function editTodoList(task) {
        console.log(task);
        const editableTodos = todos.map((todo) => {
            return (todo.id === task.id ?
                { ...task } : todo)
        })
        // console.log(task, editableTodos);
        setTodos(editableTodos)
    }
    return (
        <div>
            <TodoForm addTodo={addTodos} />
            {todos.map(todo => (<ul key={todo.id}>
                {todo.isEditable ? <TodoForm addTodo={addTodos} editTodoList={editTodoList} isEdit={true} task={todo} /> : <TodoList todo={todo} deleteTodo={deleteTodos} editTodo={editTodo} />}
            </ul>))}
        </div>
    )
}

export default TodoWrapper