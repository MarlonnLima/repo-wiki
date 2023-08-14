import github from '../assets/github_logo.png'

import { Container } from './styles'

function App() {
  return (
    <Container>
    <img src={github} width={72} height={72} alt="Logo GitHub"/>
    </Container>
  );
}

export default App;
