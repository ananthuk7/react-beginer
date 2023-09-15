import React, { useContext, useState } from 'react'

const ThemeChange = React.createContext()

export function useThemeContext() {
    return useContext(ThemeChange)
}

export const ThemeProvider = ({ children }) => {

    const [theme, changeTheme] = useState('dark')

    function setTheme() {
        changeTheme((prev => prev == 'dark' ? 'light' : 'dark'))
        const body = document.querySelector('body');
        body.style.backgroundColor = `${theme == 'dark' ? 'black' : 'white'}`
    }
    console.log(theme);

    return <ThemeChange.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeChange.Provider>
}

