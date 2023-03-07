import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #111;

  div {
    width: 100%;
    height: 56.26%;
    transform: scale(1.0012);
    position: relative;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export default Container;
