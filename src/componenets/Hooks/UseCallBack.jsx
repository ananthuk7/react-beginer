import React, { useCallback, useEffect } from 'react'

function UseCallBack() {
    const [number, setNumber] = React.useState(0)
    const [dark, setDark] = React.useState(false)

    const getNumber = useCallback(() => {
        return [number, number + 1, number + 3]
    }, [])
    const styleColor = {
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? '#333' : '#fff',
    }
    return (
        <>
            <div style={styleColor}>
                <input type="number" onChange={(e) => setNumber(parseInt(e.target.value))} />
                <button onClick={() => setDark(!dark)} >changeColor</button >
            </div>
            <List getNumber={getNumber} />

        </>
    )
}

function List({ getNumber }) {
    const [numbers, setNumbers] = React.useState([])
    useEffect(() => {
        console.log("rendered");
        setNumbers(getNumber())
    }, [getNumber])
    return (
        numbers.map((number) => < div key={number}>{number}</ div>)
    )
}


export default UseCallBack