import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children }) => {
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
  
    const setMode = (mode) => {
      setCurrentMode(mode);
      localStorage.setItem('themeMode', mode);
    };
  
    const setColor = (color) => {
      setCurrentColor(color);
      localStorage.setItem('colorMode', color);
    };
  

    return(
        <StateContext.Provider value={{initialState,
        currentColor, currentMode, activeMenu, reducer, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
        {children}
        </StateContext.Provider>
    );
};

export const useStateValue = () => useContext(StateContext);