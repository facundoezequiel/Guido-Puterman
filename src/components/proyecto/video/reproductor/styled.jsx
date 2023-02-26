import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  overflow: hidden;
  background-color: #111;

  #vimeo-player {
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;

    iframe {
      width: 100% !important;
      height: 100% !important;
      border: 0 !important;
    }
  }
`;

export default Container;
