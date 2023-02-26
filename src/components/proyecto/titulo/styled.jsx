import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 197px;
  margin: 64px 0px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #111;
  z-index: 87;
  border-top: 0.5px solid #222;

  // Max Width Container
  #max-width-container {
    width: 1440px;
    height: 197px;
    padding: 0px 20px 0px 20px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: auto;
    grid-gap: 20px;
    border-left: 0.5px solid #222;
    border-right: 0.5px solid #222;

    div:first-child {
      grid-column: 1 / span 3;
      height: 100%;
      padding: 0px 32px 28px 32px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: flex-end;
      align-items: flex-end;
      border-left: 0.5px solid #222;
      border-right: 0.5px solid #222;

      a {
        width: auto;
        display: flex;
        justify-content: flex-start;
        margin: 0px 0px 40px 0px;
        font-family: "Akkurat";
        font-size: 12px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 1px;
        color: #c3ff00;
        text-align: right;
        text-decoration: none;
        text-rendering: geometricPrecision;

        span {
          margin: 1px 12px 0px 0px;
          font-size: 19px;
          line-height: 0px;
          transition: 0.2s all;
        }

        :hover > span {
          transform: translate(-8px);
        }
      }

      h1 {
        width: 100%;
        font-family: "Tomato";
        font-size: 60px;
        font-weight: 400;
        line-height: 48px;
        color: #e1e1e1;
        text-align: left;
        text-rendering: geometricPrecision;
      }
    }

    div:nth-child(2) {
      grid-column: 4 / span 1;
      width: 334.5px;
      height: 100%;
      padding: 0px 32px 28px 32px;
      display: flex;
      justify-content: flex-end;
      align-content: flex-end;
      align-items: flex-end;
      border-left: 0.5px solid #222;
      border-right: 0.5px solid #222;

      p {
        font-family: "Akkurat";
        font-size: 12px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 1px;
        color: #c3ff00;
        text-align: right;
        text-rendering: geometricPrecision;
      }

      p span {
        color: #e1e1e1;
      }
    }
  }
`;

export default Container;
