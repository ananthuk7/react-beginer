import React, { useContext, useState } from 'react'

const ThemeChange = React.createContext()

export function ThemeContext() {
    return useContext(ThemeChange)
}

export const ThemeProvider = ({ children }) => {

    const [theme, changeTheme] = useState(false)

    return <ThemeChange.Provider value={theme}>
        {children}
    </ThemeChange.Provider>
}

export default UseContext