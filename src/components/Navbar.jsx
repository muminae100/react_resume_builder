import styled from "styled-components";
import Button, { OutlinedButton } from "./Button";
import { useStateValue } from '../StateProvider';

const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`;

const Title = styled.h1`
  padding: 5px;
  font-size: 2em;
  margin-left: 20px;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.currentMode === "Dark" ? "white" : props.currentColor};

  @media (max-width: 425px) {
    font-size: 1.5em;
  }
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