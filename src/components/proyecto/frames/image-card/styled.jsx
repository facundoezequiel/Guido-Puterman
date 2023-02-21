import styled from "styled-components";

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
        pointer-events: none;
      }
    }
  }
`;

export default Container;
