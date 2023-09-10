import { useState, useEffect } from 'react'



function UseEffectHook() {

    const [resourceType, setResourceType] = useState('posts')

    //?  every time when app renders
    // useEffect(() => {
    //     console.log("render");
    // })

    //?it runs only one time  when app renders
    // useEffect(() => {
    //     console.log("only render once");
    // }, [])

    //? when ever the dependency variable changes this will render the app    
    //? and the return from use Effect  will run first and clean up the last time we did in this

    useEffect(() => {
        console.log("render based on dependencies");
        return () => {
            console.log('return from resource change');
        }
    }, [resourceType])


    return (
        <>
            <div onClick={() => setResourceType('posts')}>posts</div>
            <div onClick={() => setResourceType('users')}>users</div>
            <div onClick={() => setResourceType('comments')}>comments</div>
            <h1>{resourceType}</h1>
        </>
    )
}

export default UseEffectHook