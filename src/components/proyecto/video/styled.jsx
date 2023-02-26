import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 261px 0px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  user-select: none;
  background-color: #111;
  z-index: 87;

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
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: auto;
    grid-gap: 20px;
    border-left: 0.5px solid #222;
    border-right: 0.5px solid #222;

    // Video Container
    #video-container {
      width: 100%;
      grid-column: 1 / span 3;
      padding: 0px 0px 0px 0px;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      border-left: 0.5px solid #222;
      border-right: 0.5px solid #222;
    }

    // Fade Container Video
    .fade-container-video {
      width: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      overflow: hidden;
      position: relative;
    }

    #texto-container {
      grid-column: 4 / span 1;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 28px 32px 28px 32px;
      border-left: 0.5px solid #222;
      border-right: 0.5px solid #222;

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

        div:nth-child(2) {
          align-self: flex-end;
        }

        p {
          width: calc(100% - 20px);
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
          font-size: 11px;
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
