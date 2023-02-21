import styled from "styled-components";
import { breakpoints } from "../../../constants/media";

const Container = styled.div`
  width: 100%;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  user-select: none;
  background-color: #212121;
  z-index: 99;

  // Marquee Container
  #marquee-container {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    position: -webkit-sticky;
    position: sticky !important;
    top: 64px;

    // Texto
    p {
      font-family: "Akkurat";
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 1px;
      text-rendering: geometricPrecision;
    }
  }

  // Max Width Container
  #max-width-container {
    width: 1366px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    border-left: 0.5px solid #333;
    border-right: 0.5px solid #333;
  }

  // Titulo Container
  #titulo-container {
    width: 50%;
    height: 444px;
    padding: 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    border-right: 0.5px solid #333;

    div {
      width: 100%;
      padding: 0px 0px 0px 0px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    div:nth-child(2) {
      align-items: flex-end;
      align-self: flex-end;
    }

    h2 {
      width: 100%;
      margin: -10px 0px 0px 0px;
      font-family: "Tomato";
      font-size: 70px;
      font-weight: 300;
      line-height: 90px;
      letter-spacing: 1px;
      color: #fff;
      text-align: left;
      text-rendering: geometricPrecision;

      img {
        width: 50px;
        margin: 0px 0px 0px 24px;
        pointer-events: none;
      }
    }

    p {
      width: 100%;
      font-family: "Akkurat";
      font-size: 12px;
      font-weight: 300;
      line-height: 24px;
      letter-spacing: 1px;
      color: #fff;
      text-align: right;
      text-rendering: geometricPrecision;
    }
  }

  // Formulario Container
  .formulario-container {
    width: 50%;
    padding: 48px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;

    // Loading Container
    #loading-container {
      width: 100%;
      padding: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;

      img {
        width: 80px;
        pointer-events: none;
      }
    }

    // Mensaje Mostrado
    #mensaje-mostrado {
      width: 100%;
      padding: 48px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;

      img {
        width: 80px;
        pointer-events: none;
      }

      p {
        width: 100%;
        margin: 32px 0px 0px 0px;
        font-family: "Akkurat";
        font-size: 12px;
        font-weight: 300;
        line-height: 24px;
        color: #fff;
        text-align: center;
        text-rendering: geometricPrecision;
        text-transform: uppercase;
      }
    }

    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      align-content: flex-start;

      input,
      textarea {
        width: 46%;
        padding: 12px 16px 12px 16px;
        margin: 32px 0px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-family: "Akkurat";
        font-size: 12px;
        font-weight: 200;
        border-radius: 4px;
        border: 1px solid #444;
        background-color: transparent;
        color: #fff;
        text-rendering: geometricPrecision;
        transition: 0.1s all;
        text-decoration: none;
        text-transform: capitalize;
        transition: 0.1s all;
      }

      input:first-child,
      input:nth-child(2) {
        margin: 0px 0px 0px 0px;
      }

      input:nth-child(3),
      input:nth-child(4) {
        text-transform: none;
      }

      input:focus,
      textarea:focus {
        border: 1px solid #999;
        outline: none;
      }

      textarea {
        min-width: 100%;
        max-width: 100%;
        min-height: 120px;
        max-height: 120px;
        margin: 32px 0px 0px 0px;
        text-transform: none;
      }

      button {
        margin: 32px 0px 0px 0px;
        padding: 16px 24px 16px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-family: "Akkurat";
        font-size: 12px;
        font-weight: 300;
        border-radius: 4px;
        border: 1px solid #fff;
        background-color: #fff;
        color: #333;
        letter-spacing: 1px;
        text-rendering: geometricPrecision;
        cursor: pointer;
        transition: 0.1s all;
        text-decoration: none;

        // Hover
        :hover {
          background-color: #212121;
          color: white;

          span {
            transform: translate(8px, -6px);
          }
        }

        // Ícono
        span {
          margin: 3px 0px 0px 6px;
          line-height: normal;
          transition: transform 0.2s;
        }
      }

      // Errores Container
      #errores-container {
        margin: 32px 0px 0px 0px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        align-content: flex-end;

        p {
          display: flex;
          justify-content: flex-end;
          align-items: flex-start;
          align-content: flex-start;
          font-family: "Akkurat";
          font-size: 11px;
          font-weight: 300;
          color: #fe4d00;
          line-height: 18px;
          text-rendering: geometricPrecision;
          text-transform: uppercase;
        }
      }
    }
  }

  // 1710px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1710}) {
    // Max Width Container
    #max-width-container {
      width: 1100px;
    }

    #titulo-container {
      padding: 40px;
    }

    // Formulario Container
    .formulario-container {
      padding: 40px;
    }
  }

  // 1300px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1300}) {
    // Max Width Container
    #max-width-container {
      width: 850px;
    }

    #titulo-container {
      width: 282px;
      padding: 40px;

      h2 {
        font-size: 55px;
        line-height: 70px;

        img {
          width: 40px;
          margin: 0px 0px 0px 16px;
        }
      }

      p {
        display: none;
      }
    }

    // Formulario Container
    .formulario-container {
      width: calc(100% - 282px);
    }
  }

  // 940px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.tablet940}) {
    // Max Width Container
    #max-width-container {
      width: 550px;
    }

    #titulo-container {
      display: none;
    }

    // Formulario Container
    .formulario-container {
      width: 100%;
    }

    form {
      button {
        font-size: 11px !important;
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

  // 500px Mobile ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.mobile500}) {
    input,
    textarea {
      width: 100% !important;
      margin: 24px 0px 0px 0px !important;
    }

    input:first-child {
      margin: 0px 0px 0px 0px !important;
    }
  }
`;

export default Container;
