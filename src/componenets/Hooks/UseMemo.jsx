import { useEffect, useMemo, useState } from 'react'

function UseMemo() {

    const [number, setnumber] = useState(0)
    // const doubleNumber = countFunction(number)
    //? useMemo is used when the function is too slow or there is a reusable object then we can use this.
    const doubleNumber = useMemo(() => countFunction(number), [number]) //? if number wille never changed this function will never be called
    const styleObject = useMemo(() => ({ color: '#000000', backgroundColor: 'green' }), [])

    //? is i dont memmorized the style object and when ever the style object chenge it have different memmory location so use 
    //? memo for memoization of that object and it only reference the old  style object not the new style object
    useEffect(() => {
        console.log("styled object updated");
    }, [styleObject])
    return (
        <>
            <input type="number" value={number} onChange={(e) => setnumber(parseInt(e.target.value))} />
            <div>{doubleNumber}</div>
            <div style={styleObject}>useMemo</div>
            <div style={styleObject}>useMemo</div>
        </>
    )
}

function countFunction(num) {
    console.log("slow function called");
    for (let i = 0; i < 100000; i++) { //no block content
    }
    return num * 2

}

export default UseMemo