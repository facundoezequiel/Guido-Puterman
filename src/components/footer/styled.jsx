import styled from "styled-components";
import { breakpoints } from "../../constants/media";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #111;
  border-top: 1px solid #222;
  z-index: 100;
  position: relative;

  ::after {
    position: absolute;
    top: 20px;
    z-index: 2;
    content: "";
    left: 0;
    contain: strict;
    right: 0;
    height: 1px;
    background-color: #222;
  }

  // Max Width Container
  #max-width-container {
    width: 1440px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-left: 0.5px solid #222;
    border-right: 0.5px solid #222;
  }

  // Logo Texto Container
  #logo-texto-container {
    width: 1400px;
    padding: 44px 28px 24px 28px;
    margin: 0px 20px 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    border-left: 0.5px solid #222;
    border-right: 0.5px solid #222;
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
      text-rendering: geometricPrecision;
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

    p {
      width: 600px;
      font-family: "Tomato";
      font-size: 12px;
      font-weight: 200;
      line-height: 22px;
      color: #fff;
      text-align: right;
      letter-spacing: 1px;
      text-rendering: geometricPrecision;
      opacity: 0.5;
    }
  }

  // 1710px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1710}) {
    // Max Width Container
    #max-width-container {
      width: 1100px;
      padding: 24px 40px 24px 40px;
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
      flex-wrap: wrap;
    }

    // Redes Idioma Container
    #redes-idioma-container {
      margin: 16px 0px 12px 0px;
      justify-content: flex-start;

      p {
        width: 100%;
        text-align: left;
      }
    }
  }

  // 600px Mobile ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.mobile600}) {
    // Max Width Container
    #max-width-container {
      width: 100%;
      border: 0px;
    }
  }
`;

export default Container;
