import styled from "styled-components";

const Container = styled.div`
  border: 0.5px solid #333;
  border-top: 0;
  border-left: 0;
  border-bottom: ${(props) => props.ultima == true && "0px !important"};
  display: flex;
  justify-content: center;
  align-items: center;

  // Fade Container
  .fade-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  // Card Container
  #card-container {
    width: 100%;
    height: 100%;
    padding: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) =>
      props.align == "derecha" ? "flex-end" : "flex-start"};
    align-items: flex-end;

    // Año y Cliente Container
    #ano-cliente-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: ${(props) =>
        props.align == "derecha" ? "flex-end" : "flex-start"};
      align-items: flex-start;
      align-self: flex-start;
    }

    // Año y Cliente
    #ano,
    #cliente {
      width: 100%;
      font-family: "Akkurat";
      font-size: 11px;
      font-weight: 300;
      line-height: 24px;
      color: #fff;
      text-align: ${(props) => (props.align == "derecha" ? "right" : "left")};
      text-rendering: geometricPrecision;
    }

    // Titulo y Boton Container
    #titulo-boton-container {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: ${(props) =>
        props.align == "derecha" ? "flex-end" : "flex-start"};
      align-items: flex-end;
      align-content: flex-end;
      align-self: flex-end;
    }

    // Titulo
    #titulo {
      width: 100%;
      margin: 0px 0px 0px 0px;
      font-family: "Tomato";
      font-size: 22px;
      font-weight: 400;
      line-height: 16px;
      color: #fff;
      text-align: ${(props) => (props.align == "derecha" ? "right" : "left")};
      letter-spacing: 1px;
      text-rendering: geometricPrecision;
    }

    // Subtitulo
    #subtitulo {
      width: 100%;
      margin: 16px 0px 0px 0px;
      font-family: "Akkurat";
      font-size: 10px;
      font-weight: 300;
      line-height: 24px;
      color: #fff;
      text-align: ${(props) => (props.align == "derecha" ? "right" : "left")};
      text-rendering: geometricPrecision;
      letter-spacing: 1px;
    }

    // Botón
    a {
      width: max-content;
      margin: 16px 0px 0px 0px;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      font-family: "Akkurat";
      font-size: 11px;
      font-weight: 300;
      background-color: #ff4d00;
      color: #fff;
      text-rendering: geometricPrecision;
      cursor: pointer;
      transition: 0.2s;
      text-decoration: none;
      border-radius: 2px;
    }

    a img {
      width: 16px;
      margin: -1px 0px 0px 6px;
    }

    a:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;

export default Container;
