// import PropTypes from 'prop-types';
import { useState } from 'react'

export default function Conter() {
    let [counter, setCounter] = useState(0)
    return (
        <>
            <div>
                <h1>Counter: {counter}</h1>
                <button onClick={() => setCounter(counter++)}>increment</button>
                <button onClick={() => setCounter(counter--)}>decrement</button>
            </div>
        </>)
}
