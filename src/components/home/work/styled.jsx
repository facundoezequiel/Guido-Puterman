import styled from "styled-components";
import { breakpoints } from "../../../constants/media";

const Container = styled.div`
  width: 100%;
  margin: 551px 0px 0px 0px;
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
    border-top: 0.5px solid #222;

    // Texto
    p {
      font-family: "Akkurat";
      font-size: 12px;
      font-weight: 300;
      letter-spacing: 1px;
      text-rendering: geometricPrecision;
      color: #dbdbdb;
    }
  }

  // Max Width Container
  #max-width-container {
    width: 100%;
  }

  // Works Container
  #works-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  // 525px Mobile ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.mobile525}) {
    margin: 451px 0px 0px 0px;
  }
`;

export default Container;
