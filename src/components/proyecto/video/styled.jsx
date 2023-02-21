import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 240px 0px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  user-select: none;
  background-color: #212121;
  z-index: 87;

  // Marquee Container
  #marquee-container {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-bottom: 1px solid #333;

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
    margin: 0px 0px 0px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    border-left: 1px solid #333;
    border-right: 1px solid #333;

    // Fila
    #fila {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: flex-start;
      align-items: flex-start;

      // Fade Container Video
      .fade-container-video {
        width: calc(100% - 340.25px);
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
      }

      // Video Container
      #video-container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        position: relative;
      }

      #texto-container {
        width: 340.25px;
        height: 575px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 48px;
        border-left: 1px solid #333;

        // Fade Container
        .fade-container {
          width: 100%;
        }

        // Texto Container Textos
        #texto-container-textos {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: flex-start;

          // Tags Container
          div {
            width: 100%;
            margin: 12px 0px 0px 0px;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: flex-start;

            p {
              width: auto;
              padding: 3px 12px 4px 12px;
              margin: 12px 12px 0px -2px;
              font-family: "Tomato";
              font-size: 11px;
              font-weight: 400;
              line-height: 24px;
              letter-spacing: 1px;
              border: 1px solid #555;
              border-radius: 300px;
            }
          }
        }

        div:nth-child(2) {
          align-self: flex-end;
        }

        p {
          font-family: "Tomato";
          font-size: 13px;
          font-weight: 300;
          line-height: 26px;
          color: #fff;
          letter-spacing: 1px;
          align-self: flex-start;
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
      }
    }
  }
`;

export default Container;
