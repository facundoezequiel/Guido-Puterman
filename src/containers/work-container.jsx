// Components
import Header from "../components/header";
import Titulo from "../components/proyecto/titulo";
import Video from "../components/proyecto/video";
import Frames from "../components/proyecto/frames";
import Footer from "../components/footer";
// Styled Components
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #212121;
`;

export default function WorkContainer({ idioma, idiomaEng, idiomaEsp }) {
  return (
    <Container>
      <Header
        idioma={idioma}
        idiomaEng={idiomaEng}
        idiomaEsp={idiomaEsp}
      ></Header>
      <Titulo idioma={idioma}></Titulo>
      <Video idioma={idioma}></Video>
      <Frames idioma={idioma}></Frames>
      <Footer
        idioma={idioma}
        idiomaEng={idiomaEng}
        idiomaEsp={idiomaEsp}
      ></Footer>
    </Container>
  );
}
