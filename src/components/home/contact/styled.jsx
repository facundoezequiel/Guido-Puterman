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
  background-color: #111;
  z-index: 99;

  // Marquee Container
  #marquee-container {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-top: 1px solid #222;
    border-bottom: 1px solid #222;
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
    width: 1440px;
    padding: 0px 20px 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    border-left: 0.5px solid #222;
    border-right: 0.5px solid #222;
  }

  // Titulo Container
  #titulo-container {
    width: calc(50% - 10px);
    height: 407px;
    padding: 28px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    border-left: 0.5px solid #222;
    border-right: 0.5px solid #222;

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
      font-size: 60px;
      font-weight: 300;
      line-height: 70px;
      letter-spacing: 1px;
      color: #fff;
      text-align: left;
      text-rendering: geometricPrecision;

      img {
        width: 45px;
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
      color: #c3ff00;
      text-align: right;
      text-rendering: geometricPrecision;
    }
  }

  // Formulario Container
  .formulario-container {
    width: calc(50% - 10px);
    padding: 28px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    border-left: 0.5px solid #222;
    border-right: 0.5px solid #222;

    // Loading Container
    #loading-container {
      width: 100%;
      height: 351px;
      padding: 28px;
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
      height: 351px;
      padding: 28px;
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
        width: 47.5%;
        padding: 12px 16px 12px 16px;
        margin: 32px 0px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-family: "Akkurat";
        font-size: 13px;
        font-weight: 200;
        border-radius: 4px;
        border: 1px solid #222;
        background-color: #161616;
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
        border: 1px solid #444;
        outline: none;
      }

      textarea {
        width: 100%;
        height: 120px;
        resize: none;
        margin: 32px 0px 0px 0px;
        text-transform: none;
      }

      .input-error {
        border: 1px solid #ff4d00;
      }

      .input-error:focus {
        border: 1px solid #ff4d00;
      }

      button {
        margin: 32px 0px 0px 0px;
        padding: 16px 24px 16px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-family: "Akkurat";
        font-size: 11px;
        font-weight: 300;
        border-radius: 4px;
        border: 1px solid #dbdbdb;
        background-color: #dbdbdb;
        color: #333;
        letter-spacing: 1px;
        text-rendering: geometricPrecision;
        cursor: pointer;
        transition: 0.1s all;
        text-decoration: none;

        // Hover
        :hover {
          background-color: #111;
          color: #dbdbdb;

          span {
            transform: translate(8px, -6px);
          }
        }

        // Ícono
        span {
          margin: 3px 0px 0px 6px;
          line-height: normal;
          font-size: 15px;
          transition: transform 0.2s;
        }
      }
    }
  }

  // 1440px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1440}) {
    // Max Width Container
    #max-width-container {
      width: 100%;
    }
  }

  // 850px Tablet ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.tablet850}) {
  }
`;

export default Container;
