import { useReducer, useState } from 'react'

const todoAction = {
    ADD_TODO: 'addTodo',
    EDIT_TODO: 'editTodo',
    DELETE_TODO: 'deleteTodo',
    ENABLE_EDIT: 'enableEdit'
}

function reducer(state, action) {
    switch (action.type) {
        case todoAction.ADD_TODO:
            return [...state, { id: Math.random(), task: action.payload, done: false }]
        case todoAction.ENABLE_EDIT:
            return state.map((todo) => {
                return todo.id !== action.payload.id ? todo : { ...todo, done: true }
            })
        case todoAction.EDIT_TODO:
            return state.map((todo) => {
                return todo.id !== action.payload.id ? todo : { ...todo, task: action.payload.task, done: false }
            })
        case todoAction.DELETE_TODO:
            return state.filter((task) => task.id !== action.payload.id)
        default:
            return state
    }
}


function UseReducer() {

    //? used for handling complex state
    const [todos, dispatch] = useReducer(reducer, [])
    const [todo, setTodo] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: todoAction.ADD_TODO, payload: todo })
        setTodo('')
    }
    function handleDelete(id) {
        dispatch({ type: todoAction.DELETE_TODO, payload: { id: id } })
    }
    function handleEdit(id) {
        dispatch({ type: todoAction.ENABLE_EDIT, payload: { id: id } })
        setTodo(todos.find((todo) => todo.id === id)?.task)

    }
    function handleSubmitEdit(id) {
        dispatch({ type: todoAction.EDIT_TODO, payload: { task: todo, id: id } })
        setTodo('')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <input type="submit" />
            </form>
            {todos.map((task) =>
                <div key={task.id}>
                    {task.done ? (<form onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmitEdit(task.id)
                    }}>
                        <input type="text" placeholder="" value={todo} onChange={(e) => setTodo(e.target.value)} />
                        <input type="submit" />
                    </form>)
                        : (<p >{task.task}</p>)}
                    <button onClick={() => handleEdit(task.id)}>Edit</button>
                    {!task.done && (<button onClick={() => handleDelete(task.id)}>delete</button>)}
                </div >)
            }
        </>
    )
}

export default UseReducer