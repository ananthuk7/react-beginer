import { useRef } from 'react';
import { useThemeContext } from './UseContext'

function ContextComponenet() {
    const { theme, setTheme } = useThemeContext()
    const div = useRef()
    console.log(theme);

    return (
        <>
            <div ref={div}>{theme}</div>
            <button onClick={(() => {
                setTheme()
                div.current.style.color = `${theme == 'dark' ? 'white' : 'black'}`
            })} > change</button >
        </>
    )
}

export default ContextComponenet