// Components
// Styled Components
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: black;

  p {
    color: var(--blanco);
  }
`;

export default function SobremiContainer({ idioma, idiomaEng, idiomaEsp }) {
  return (
    <Container>
      <p>Hola</p>
    </Container>
  );
}
