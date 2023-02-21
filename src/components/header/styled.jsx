import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: ${(props) => (props.tema == "oscuro" ? "#212121" : "#fff")};
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: ${(props) =>
    props.tema == "oscuro" ? "1px solid #333" : "1px solid #e1e1e1"};
  z-index: 100;

  // Max Width Container
  #max-width-container {
    width: 1366px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }

  // Logo Container
  #logo-container {
    margin: 0px 0px 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;

    // Logo
    h1 {
      transition: 0.2s;
    }

    h1 a {
      font-family: "Tomato";
      font-size: 29px;
      font-weight: 600;
      text-align: center;
      color: ${(props) => (props.tema != "oscuro" ? "#212121" : "#fff")};
      cursor: pointer;
      text-decoration: none;
    }

    // Logo Hover
    h1:hover {
      transform: scale(0.97) !important;
    }
  }

  // Redes Idioma Container
  #redes-idioma-container {
    width: max-content;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
  }

  // Redes Container
  #redes-container {
    width: auto;
    margin: 0px 0px 0px 24px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;

    // Botones
    a {
      color: ${(props) => (props.tema != "oscuro" ? "#212121" : "#fff")};
      font-size: 18px;
      line-height: 12px;
      margin: 0px 0px 0px 8px;
      transition: 0.2s all;
      cursor: pointer;
    }
  }

  // Idioma Container
  #idioma-container {
    width: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;

    // Botones
    a {
      font-family: "Akkurat";
      color: ${(props) => (props.tema != "oscuro" ? "#212121" : "#fff")};
      font-size: 13px;
      font-weight: 500;
      margin: 0px 0px 0px 8px;
      transition: 0.2s all;
      letter-spacing: 1px;
      cursor: pointer;
    }
  }

  // Hover Botones
  #redes-container a:hover,
  #idioma-container a:hover {
    transform: scale(1.1);
  }

  .idioma-seleccionado {
    color: #ff4d00 !important;
  }

  // 1710px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1710}) {
    // Max Width Container
    #max-width-container {
      width: 1100px;
    }
  }

  // 1300px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1300}) {
    // Max Width Container
    #max-width-container {
      width: 850px;
    }
  }

  // 940px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.tablet940}) {
    // Max Width Container
    #max-width-container {
      width: 550px;
    }
  }

  // 600px Mobile ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.mobile600}) {
    // Max Width Container
    #max-width-container {
      width: 100%;
      padding: 0px 40px 0px 40px;
    }
  }
`;

export default Container;
