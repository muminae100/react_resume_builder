import styled from "styled-components";
import Button, { OutlinedButton } from "./Button";
import { useStateValue } from '../StateProvider';

const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  position: sticky;
  top: 0;
`;

const Title = styled.h1`
  padding: 0.5em;
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.currentMode === "Dark" ? "white" : props.currentColor};
`;

const Navbar = () => {
  const { currentColor, currentMode } = useStateValue();

  return (
    <NavBarWrapper currentMode={currentMode}>
      <Title currentColor={currentColor} currentMode={currentMode}>CV Builder</Title>
      <div>
      <Button currentColor={currentColor}>Login</Button>
      <OutlinedButton currentColor={currentColor}>Sign Up</OutlinedButton>
      </div>
    </NavBarWrapper>
  )
}

export default Navbar;