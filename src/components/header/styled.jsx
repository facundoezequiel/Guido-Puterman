import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: rgba(17, 17, 17, 0.65);
  backdrop-filter: saturate(180%) blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  // Max Width Container
  #max-width-container {
    width: 1344px;
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
      color: #fff;
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

  // Nav Container
  #nav-container {
    width: auto;
    margin: 0px 56px 0px 0px;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;

    li {
      width: auto;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      align-content: center;

      a {
        margin: 0px 0px 0px 24px;
        font-family: "Akkurat";
        color: #dbdbdb;
        font-size: 12px;
        font-weight: 300;
        transition: 0.2s all;
        letter-spacing: 1px;
        text-decoration: none;
        transition: 0.2s all;
        cursor: pointer;
      }

      a:hover {
        background-color: #444;
      }

      .boton-seleccionado {
        color: #c3ff00;
      }
    }
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
      color: #dbdbdb;
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
      color: #dbdbdb;
      font-size: 12px;
      font-weight: 300;
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
    color: #c3ff00 !important;
  }

  // 1440px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1440}) {
    // Max Width Container
    #max-width-container {
      width: calc(100% - 48px - 48px);
    }
  }

  // 720px Tablet ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.tablet720}) {
    // Redes Idioma Container
    #redes-idioma-container {
      display: none;
    }
  }
`;

export default Container;
