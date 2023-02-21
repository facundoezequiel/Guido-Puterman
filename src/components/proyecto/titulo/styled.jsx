import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 87;

  // Max Width Container
  #max-width-container {
    width: 1366px;
    margin: 64px 0px 0px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    border-left: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;

    div:first-child {
      width: calc(100% - 340.25px);
      padding: 48px;
      display: flex;
      justify-content: flex-start;
      align-content: flex-start;
      align-items: flex-start;
      border-right: 1px solid #e1e1e1;

      h1 {
        width: 100%;
        font-family: "Tomato";
        font-size: 60px;
        font-weight: 400;
        line-height: 80px;
        color: #212121;
        text-align: left;
        text-rendering: geometricPrecision;
      }
    }

    div:nth-child(2) {
      width: 340.25px;
      padding: 48px;

      p {
        font-family: "Akkurat";
        font-size: 12px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 1px;
        color: #ff4d00;
        text-align: right;
        text-rendering: geometricPrecision;
      }

      p span {
        color: #212121;
      }
    }
  }
`;

export default Container;
