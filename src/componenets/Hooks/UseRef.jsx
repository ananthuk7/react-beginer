import { useEffect, useRef, useState } from 'react'

function UseRef() {
    const [name, setName] = useState('')
    //? use ref is same as useState but ite doesnt render the component when the value become updated and it returns an object
    //? dont use useRef for appendChild or update the value  because its doesnot upadte the the value of state 
    const renderCount = useRef(0)
    const inputRef = useRef(0)
    //? another use case for useRef is we can store  previous values of a state  
    const prevName = useRef('')

    useEffect(() => {
        prevName.current = name
    }, [name])


    useEffect(() => {
        renderCount.current += 1
    })


    function focus() {
        inputRef.current.focus()
        //* inputRef.current.value = "Ananthu" // in this the value Ananthu will not update the state value
    }
    return (
        <>
            <input type="text" value={name} name="number" id="" ref={inputRef} onChange={(e) => setName(e.target.value)} />
            <div>My name is {name} and used to be {prevName.current}</div>
            <div>I rendered {renderCount.current} times</div>
            <button onClick={focus}>focus</button>
        </>
    )
}

export default UseRef