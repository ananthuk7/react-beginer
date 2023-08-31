import { useState } from 'react';
import question from '../../question'
import AccordianList from './AccordianList'
function Accordian() {
    // console.log(questions);
    const [questions, setQuestions] = useState(question)
    return (
        <div>
            {questions.map((question) => <AccordianList {...question} key={question.question} />)}
        </div>
    )
}

export default Accordian