import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.currentColor || ""};
  border-radius: 3px;
  border: ${props => props.currentColor ?  `1px solid ${props.currentColor}` : ""};
  color: #f1f1f1;
  margin: 0 1em;
  padding: 1em;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background: transparent;
    color: ${props => props.currentColor || ""};
  }
`;

const OutlinedButton = styled(Button)`
  color: ${props => props.currentColor || ""};
  background: transparent;

  &:hover {
    background: ${props => props.currentColor || ""};
    color: #f1f1f1;
  }
`;

export { OutlinedButton };
export default Button; 