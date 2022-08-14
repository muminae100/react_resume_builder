import styled,  { css } from 'styled-components'

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1rem;
padding: 0.25rem 1rem;

${props =>
  props.primary &&
  css`
    background: palevioletred;
    color: white;
  `};

`;

const App = () => {
  return (
    <div>
      <Button>Hello</Button>
    </div>
  )
}

export default App;