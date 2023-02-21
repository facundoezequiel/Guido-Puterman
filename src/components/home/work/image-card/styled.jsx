import styled from "styled-components";
import { breakpoints } from "../../../../constants/media";

const Container = styled.div`
  border: 0.5px solid #333;
  border-bottom: ${(props) => props.ultima == true && "0px !important"};
  border-top: 0;
  border-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  // Card Container
  #card-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    overflow: hidden;

    // Image Container
    .image-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;

      // Imagen
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  // 940px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.tablet940}) {
    order: ${(props) =>
      props.fila == 1
        ? "1"
        : props.fila == 2
        ? "4"
        : props.fila == 3
        ? "5"
        : props.fila == 4
        ? "8"
        : props.fila == 5
        ? "9"
        : props.fila == 6
        ? "12"
        : props.fila == 7
        ? "13"
        : props.fila == 8 && "16"};
  }

  // 500px Mobile ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.mobile500}) {
    order: ${(props) =>
      props.fila == 1
        ? "1"
        : props.fila == 2
        ? "3"
        : props.fila == 3
        ? "5"
        : props.fila == 4
        ? "7"
        : props.fila == 5
        ? "9"
        : props.fila == 6
        ? "11"
        : props.fila == 7
        ? "13"
        : props.fila == 8 && "15"};
  }
`;

export default Container;
