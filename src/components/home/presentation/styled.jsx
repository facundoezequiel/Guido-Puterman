import styled from "styled-components";
import { breakpoints } from "../../../constants/media";

const Container = styled.div`
  width: 100%;
  height: 487px;
  margin: 64px 0px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111;
  border-top: 0.5px solid #222;
  z-index: 87;

  // Max Width Container
  #max-width-container {
    width: 1440px;
    height: 487px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    align-content: flex-end;
    border-left: 0.5px solid #222;
    border-right: 0.5px solid #222;
  }

  // Titulo Container
  #titulo-container {
    width: 100%;
    height: 487px;
    padding: 12px 32px 28px 32px;
    margin: 0px 20px 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-left: 0.5px solid #222;
    border-right: 0.5px solid #222;

    // Titulo Texto
    #titulo-texto {
      width: calc(100% - 125px);
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-end;
      align-content: flex-end;

      //Titutlo
      h1 {
        width: 100%;
        font-family: "Tomato";
        font-size: 70px;
        font-weight: 400;
        line-height: 70px;
        color: #fff;
        text-align: left;
        text-rendering: geometricPrecision;

        span {
          font-size: 51px;
          font-weight: 300;
        }
      }

      // Subtitulo
      p {
        width: 100%;
        margin: 16px 0px 0px 0px;
        font-family: "Tomato";
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        letter-spacing: 0.3px;
        color: #e1e1e1;
        text-align: left;
        text-rendering: geometricPrecision;
      }
    }
  }

  // Subtitulo Container
  #subtitulo-container {
    width: 125px;
    height: 348px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    #ano {
      width: 100%;
      margin: 12px 0px 0px 0px;
      font-family: "Akkurat";
      font-size: 13px;
      font-weight: 300;
      line-height: 24px;
      color: #fff;
      text-align: right;
      text-rendering: geometricPrecision;
      align-self: flex-start !important;
    }
  }

  #disponible {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: flex-end;

    #icono-container {
      width: 34px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      border-radius: 500px;
      background-color: #444;

      span {
        margin: 3px 0px 0px 0px;
        font-size: 20px;
        color: #fff;
        line-height: normal;
        text-rendering: geometricPrecision;
      }
    }

    p {
      width: 100%;
      margin: 16px 0px 0px 0px;
      font-family: "Akkurat";
      font-size: 12px;
      font-weight: 400;
      line-height: 24px;
      color: #c3ff00;
      text-align: right;
      text-rendering: geometricPrecision;
    }
  }

  // 1440px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1440}) {
    // Max Width Container
    #max-width-container {
      width: calc(100%);
    }
  }

  // 850px Tablet ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.tablet850}) {
    // Titulo Container
    #titulo-container {
      // Titulo Texto
      #titulo-texto {
        //Titutlo
        h1 {
          font-size: 50px;

          span {
            font-size: 40px;
          }
        }
      }
    }
  }

  // 720px Tablet ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.tablet720}) {
    // Titulo Container
    #titulo-container {
      // Titulo Texto
      #titulo-texto {
        width: 100%;
      }

      // Subtitulo Container
      #subtitulo-container {
        display: none;
      }
    }
  }

  // 525px Mobile ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.mobile525}) {
    height: 287px;

    // Titulo Container
    #titulo-container {
      // Titulo Texto
      #titulo-texto {
        //Titutlo
        h1 {
          font-size: 40px;
          line-height: 50px;

          span {
            font-size: 24px;
            height: auto;
            line-height: 10px !important;
          }
        }
      }
    }
  }
`;

export default Container;
