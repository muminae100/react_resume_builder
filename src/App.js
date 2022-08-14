import styled, { createGlobalStyle } from 'styled-components';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import { useStateValue } from './StateProvider';
import Navbar from "./components/Navbar";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-x: hidden;
    width: 100%;
  }
`;

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.currentMode === "Dark" ? "#20232A" : "white"};
  color: ${props => props.currentMode === "Dark" ? "#f1f1f1" : "#333"};
`;

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode } = useStateValue();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  return (
    <Router>
      <GlobalStyle />
      <AppWrapper currentMode={currentMode}>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Home />}/>
      </Routes>
      </AppWrapper>
    </Router>
  )
}

export default App;