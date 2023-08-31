import { useState } from 'react'
import PropTypes from 'prop-types'

function AccordianList({ question, answer }) {
    const [active, setActive] = useState(false)
    return (
        <div>
            <h3>{question}</h3>
            <button onClick={() => setActive(!active)}>{!active ? '+' : '-'}</button>
            {active && <div>{answer}</div>}
        </div>
    )
}

AccordianList.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string,
}

export default AccordianList