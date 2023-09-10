import { useEffect, useState } from 'react'

function ApiCall() {
    const [data, setData] = useState([])


    async function fetchApi() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result)
    }

    
    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p >{item.body}</p>
                </div>))}
        </div>
    )
}

export default ApiCall