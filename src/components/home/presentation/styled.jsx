import styled from "styled-components";
import { breakpoints } from "../../../constants/media";

const Container = styled.div`
  width: 100%;
  height: 681px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 87;

  // Max Width Container
  #max-width-container {
    width: 1366px;
    height: 681px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    border-left: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;
  }

  // Titulo Container
  #titulo-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // Titulo Video Texto
    #titulo-video-texto {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      // Titulo Video
      #titulo-video {
        width: 340.25px;
        height: 100%;
        margin: 0px 0px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        border-right: 1px solid #e1e1e1;

        // Videos Container
        #videos-container {
          width: 100%;
          height: 348px;
          position: relative;
        }

        // Video
        #video-izquierda {
          height: 200px;
          width: 170px;
          position: absolute;
          left: 48px;
          bottom: 0;
          object-fit: cover;
          border-radius: 4px;
        }

        #video-derecha {
          height: 200px;
          width: 170px;
          position: absolute;
          right: 48px;
          top: 12px;
          object-fit: cover;
          border-radius: 4px;
        }
      }

      // Titulo Texto
      #titulo-texto {
        width: calc(100% - 680.5px);
        height: 100%;
        padding: 0px 48px 0px 48px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        border-right: 1px solid #e1e1e1;

        //Titutlo
        h1 {
          width: 100%;
          font-family: "Tomato";
          font-size: 70px;
          font-weight: 300;
          line-height: 80px;
          color: #212121;
          text-align: left;
          text-rendering: geometricPrecision;

          span {
            font-size: 51px;
          }
        }

        // Subtitulo
        p {
          width: 100%;
          margin: 24px 0px 0px 0px;
          font-family: "Tomato";
          font-size: 16px;
          font-weight: 300;
          line-height: 29px;
          color: #212121;
          letter-spacing: 0.5px;
          text-align: left;
          text-rendering: geometricPrecision;
        }

        // Botones Container
        #botones-container {
          width: 100%;
          margin: 48px 0px 0px 0px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          align-content: flex-start;

          // Botón
          a {
            margin: 0px 24px 0px 0px;
            padding: 16px 24px 16px 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            font-family: "Akkurat";
            font-size: 12px;
            font-weight: 300;
            border-radius: 4px;
            border: 1px solid #212121;
            background-color: transparent;
            color: #212121;
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
        }
      }
    }

    // Subtitulo Container
    #subtitulo-container {
      width: 340.25px;
      height: 348px;
      padding: 0px 48px 0px 0px;
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
        color: #212121;
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
        background-color: #212121;

        span {
          margin: 3px 0px 0px 0px;
          font-size: 20px;
          color: white;
          line-height: normal;
          text-rendering: geometricPrecision;
        }
      }

      p {
        width: 100%;
        margin: 16px 0px 0px 0px;
        font-family: "Akkurat";
        font-size: 12px;
        font-weight: 300;
        line-height: 24px;
        color: #212121;
        text-align: right;
        text-rendering: geometricPrecision;
      }
    }
  }

  // 1710px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1710}) {
    // Max Width Container
    #max-width-container {
      width: 1100px;
    }

    // Titulo Video
    #titulo-video {
      width: 273.75px !important;

      // Video
      #video-izquierda {
        height: 190px !important;
        width: 140px !important;
        left: 40px !important;
      }

      #video-derecha {
        height: 190px !important;
        width: 140px !important;
        right: 40px !important;
      }
    }

    // Titulo Texto
    #titulo-texto {
      width: calc(100% - 435.5px) !important;
      border: 0 !important;
      padding: 0px 0px 0px 40px !important;
    }

    // Subtitulo Container
    #subtitulo-container {
      width: 161.75px !important;
      padding: 0px 40px 0px 0px !important;
    }
  }

  // 1300px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1300}) {
    height: 620px;

    // Max Width Container
    #max-width-container {
      width: 850px;
      margin: 32px 0px 0px 0px;
    }

    // Titulo Video
    #titulo-video {
      display: none !important;
    }

    // Titulo Texto
    #titulo-texto {
      width: calc(100% - 161.75px) !important;
    }
  }

  // 940px Tablet ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.tablet940}) {
    height: auto;
    margin: 64px 0px 0px 0px;

    // Max Width Container
    #max-width-container {
      width: 550px;
      height: auto;
      margin: 0px 0px 0px 0px;
      padding: 72px 0px 88px 0px;
    }

    // Subtitulo Container
    #subtitulo-container {
      display: none !important;
    }

    // Titulo Texto
    #titulo-texto {
      width: 100% !important;

      //Titutlo
      h1 {
        font-size: 51px !important;
        line-height: 60px !important;

        span {
          font-size: 40px !important;
        }
      }

      // Subtitulo
      p {
        margin: 24px 0px 0px 0px !important;
        font-size: 15px !important;
      }

      // Botones Container
      #botones-container {
        margin: 40px 0px 0px 0px !important;

        // Botón
        a {
          font-size: 11px !important;
        }
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
