import { useState , useEffect } from "react"

import { createContext } from "react";

const ThemeContext = createContext(null);


const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme || 'light';
    });

    useEffect(() => {
      localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
      setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext , ThemeProvider}