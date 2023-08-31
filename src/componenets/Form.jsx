import { useReducer, useState } from 'react'

function Form() {

    const [formData, dispatch] = useReducer(reducerFunction, {})
    const [submitted, setSubmit] = useState(false)
    function reducerFunction(state, data) {
        // console.log(state, data);
        if (data.ditach) { return {} }
        return { ...state, [data.name]: data.value }
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData);
        setSubmit(true)
        dispatch({ ditach: true })
        setTimeout(() => {
            setSubmit(false)
        }, 3000)

    }

    function handleInputChange(event) {
        const isCheckbox = event.target.type === 'checkbox' || false;
        dispatch({ name: event.target.name, value: isCheckbox ? event.target.checked : event.target.value })
    }
    return (
        <div>Form
            <div>
                {submitted ? Object.entries(formData).map(([key, value]) => (<p key={key} value={value}>{key} : {value}</p>)) : ''}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" value={formData.name || ''} onChange={handleInputChange} /> <br />
                <input type="email" name="email" id="" value={formData.email || ''} onChange={handleInputChange} /><br />
                <input type="number" name="count" id="" value={formData.count || ''} onChange={handleInputChange} /><br />
                <select name="select" id="" onChange={handleInputChange} value={formData.select || ''}>
                    <option value="Item1">Item 1</option>
                    <option value="Item2">Item 2</option>
                    <option value="Item3">Item 3</option>
                </select><br />
                <input type="checkbox" name="testCheckbox1" id="" checked={formData.testCheckbox1 || false} onChange={handleInputChange} /> test1
                <input type="checkbox" name="testCheckbox2" id="" checked={formData.testCheckbox2 || false} onChange={handleInputChange} /> test2<br />
                <input type="radio" value="radio1" name="testradio2" checked={formData.testradio2 === 'radio1' || false} id="" onChange={handleInputChange} /> radio1<br />
                <input type="radio" value="radio2" name="testradio2" id="" checked={formData.testradio2 === 'radio2' || false} onChange={handleInputChange} /> radio2<br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form