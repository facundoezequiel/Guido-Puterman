import styled from "styled-components";
import { breakpoints } from "../../../constants/media";

const Container = styled.div`
  width: 100%;
  margin: 681px 0px 0px 0px;
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
    border-left: 0.5px solid #333;
  }

  // Works Container
  #works-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;
    grid-auto-rows: minmax(340.25px, auto);
  }

  // 1710px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1710}) {
    // Max Width Container
    #max-width-container {
      width: 1100px;
    }

    // Works Container
    #works-container {
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(274.75px, auto);
    }
  }

  // 1300px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1300}) {
    margin: 620px 0px 0px 0px;

    // Max Width Container
    #max-width-container {
      width: 850px;
    }

    // Works Container
    #works-container {
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: minmax(283px, auto);
    }
  }

  // 940px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.tablet940}) {
    margin: 521px 0px 0px 0px;

    // Max Width Container
    #max-width-container {
      width: 550px;
    }

    // Works Container
    #works-container {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minmax(274.5px, auto);
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
    // Works Container
    #works-container {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-rows: minmax(240px, auto);
    }
  }
`;

export default Container;
