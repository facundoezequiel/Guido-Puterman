import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
  background-color: #212121;

  #vimeo-player {
    width: 100% !important;
    height: 100% !important;

    iframe {
      width: 100% !important;
      height: 100% !important;
    }
  }
`;

export default Container;
