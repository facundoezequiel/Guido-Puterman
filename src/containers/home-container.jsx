// Components
import Header from "../components/header";
import Presentation from "../components/home/presentation";
import Work from "../components/home/work";
import Contact from "../components/home/contact";
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

export default function HomeContainer({ idioma, idiomaEng, idiomaEsp }) {
  return (
    <Container>
      <Header
        idioma={idioma}
        idiomaEng={idiomaEng}
        idiomaEsp={idiomaEsp}
      ></Header>
      <Presentation
        idioma={idioma}
        idiomaEng={idiomaEng}
        idiomaEsp={idiomaEsp}
      ></Presentation>
      <Work idioma={idioma} idiomaEng={idiomaEng} idiomaEsp={idiomaEsp}></Work>
      <Contact
        idioma={idioma}
        idiomaEng={idiomaEng}
        idiomaEsp={idiomaEsp}
      ></Contact>
      <Footer
        idioma={idioma}
        idiomaEng={idiomaEng}
        idiomaEsp={idiomaEsp}
      ></Footer>
    </Container>
  );
}
