import { useState } from 'react'

function helloWorld() {
    return 'hello'
}

function UseState() {
    //? count is the state value and setCount is used for update the state
    const [count, setCount] = useState(0)
    const [state, setState] = useState({ count: 0, color: 'red' })

    const countValue = state.count;
    const theme = state.color





    //* we can pass function in an useState

    //? here the function execute and set the initial value to the useState as hello and also 
    //?it runs only run the function when the app render.
    const [data, setData] = useState(() => 'hello')


    const [hello, setHello] = useState(() => helloWorld())



    // function increment() {
    //     //* we get previous value of the state by using function version
    //     setCount((prevValue) => prevValue + 1);
    // }

    //? an exception in use state compare to class components when a state object is updated ite will not merge 
    //? with the object it will override all over  the state

    // function increment() {
    //     return setState({
    //         count: countValue + 1,
    //     })
    // }

    //? we  can solve this by using function with prev state value

    function increment() {
        return setState((prevState) => ({
            ...prevState, count: prevState.count + 1
        }))
    }



    return (
        <>
            <div onClick={increment}>{count}</div>
            <div onClick={increment}>{countValue}{theme}</div>
            <div>{data}</div>
            <div>{hello}</div>
        </>
    )
}

export default UseState