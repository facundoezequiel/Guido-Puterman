import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  user-select: none;
  background-color: #212121;
  border-top: 1px solid #333;
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
  }

  // Titulo Container
  #titulo-container {
    width: 340px;
    height: 250px;
    padding: 48px 0px 0px 48px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    border-bottom: 1px solid #333;
    border-right: 1px solid #333;

    // Slide Container
    div {
      width: 100%;
      padding: 0px 0px 0px 0px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }

    // Titulo
    h2 {
      width: 100%;
      margin: -10px 0px 0px 0px;
      font-family: "Tomato";
      font-size: 60px;
      font-weight: 300;
      line-height: 80px;
      letter-spacing: 1px;
      color: #fff;
      text-align: left;
      text-rendering: geometricPrecision;

      // Emoji
      img {
        width: 55px;
        margin: 0px 0px 0px 24px;
        pointer-events: none;
      }
    }
  }

  // Gracias Container
  #gracias-container {
    width: 340px;
    height: 250px;
    padding: 0px 48px 48px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    align-content: flex-end;
    overflow: hidden;
    border-right: 1px solid #333;

    // Slide Container
    div {
      width: 100%;
      padding: 0px 0px 0px 0px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-items: flex-end;
      align-content: flex-end;

      // Texto
      p {
        width: 100%;
        font-family: "Akkurat";
        font-size: 13px;
        font-weight: 300;
        line-height: 24px;
        color: #fff;
        text-align: right;
        text-rendering: geometricPrecision;
      }

      // Emoji
      img {
        width: 32px;
        margin: 16px 0px 0px 0px;
        pointer-events: none;
      }
    }
  }

  // Works Container
  #frames-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;
    grid-auto-rows: minmax(250px, auto);
  }
`;

export default Container;
