import styled from "styled-components";
import { useStateValue } from '../StateProvider';
import { BsCheck } from 'react-icons/bs';
import { FaPaintBrush } from "react-icons/fa";
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const themeColors = [
    {
      name: 'blue-theme',
      color: '#1A97F5',
    },
    {
      name: 'green-theme',
      color: '#03C9D7',
    },
    {
      name: 'purple-theme',
      color: '#7352FF',
    },
    {
      name: 'red-theme',
      color: '#FF5C8E',
    },
    {
      name: 'indigo-theme',
      color: '#1E4DB7',
    },
    {
      color: '#FB9678',
      name: 'orange-theme',
    },
];

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.currentColor || ""};
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  margin: 10px;
  padding: 15px;
  border-radius: 50%;
`;

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings, themeSettings } = useStateValue();

  return (
        <>        
        {themeSettings &&(
        <>
        {themeColors.map((item, index) => ( 
            <IconWrapper currentColor={item.color} key={index} onClick={() => setColor(item.color)} >        
            <BsCheck style={{"display": `${item.color === currentColor ? 'block' : 'hidden'}`, "color":"white"}} />
            </IconWrapper>
        ))}
        </>
        )}

            <IconWrapper currentColor={currentColor} onClick={() => setThemeSettings(!themeSettings)}>
            <FaPaintBrush style={{"color": "white"}} />
            </IconWrapper>
            <IconWrapper currentColor={currentColor}>
            {currentMode === 'Light' ? <BsFillSunFill onClick={() =>setMode("Dark")} style={{"color": "white"}}/> : <BsFillMoonFill onClick={() =>setMode("Light")} style={{"color": "white"}}/>}
            </IconWrapper>
          
        </>
      
  );
};

export default ThemeSettings;