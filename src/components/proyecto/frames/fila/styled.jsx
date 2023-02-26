import styled from "styled-components";
import { breakpoints } from "../../../../constants/media";

const Container = styled.section`
  width: 100%;
  height: 353px;
  contain: strict;
  user-select: none;
  background-color: #111;
  border-top: 0.5px solid #222;

  ::after {
    position: absolute;
    top: 22px;
    z-index: 2;
    content: "";
    left: 0;
    right: 0;
    height: 1px;
    background-color: #222;
  }

  #sections-container {
    width: 1440px;
    height: 100%;
    padding: 0px 20px 0px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: auto;
    grid-gap: 20px;
    border-left: 0.5px solid #222;
    border-right: 0.5px solid #222;
  }

  section {
    height: 100%;
    border-left: 0.5px solid #222;
    border-right: 0.5px solid #222;

    a {
      text-decoration: none;

      #texto-container {
        width: 100%;
        height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        transition: 0.2s all;
        position: relative;

        div {
          width: 100%;
          padding: 2px 28px 0px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-content: center;
        }

        p {
          font-family: "Akkurat";
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0px;
          line-height: 0px;
          text-rendering: geometricPrecision;
          color: #c7c7c7;
          transition: 0.2s all;
        }

        span {
          width: 21px;
          height: 22px;
          position: absolute;
          top: 0px;
          right: -22px;
          z-index: 2;
          content: "";
          background-color: #c3ff00;
          opacity: 0;
          transition: 0.2s all;
          color: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
        }
      }

      #video-container {
        width: 100%;
        height: calc(100% - 22px);
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        cursor: pointer;
        overflow: hidden;

        div {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;

          // Video
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.2s all;
          }
        }
      }
    }

    a:hover > div video {
      transform: scale(1.1);
      filter: saturate(0);
    }

    a:hover > #texto-container {
      background-color: #444;

      p {
        color: #e1e1e1;
      }

      span {
        opacity: 1;
      }
    }
  }

  section:first-child {
    grid-column: 1 / span 3;
  }

  section:nth-child(2) {
    grid-column: 4 / span 3;
  }

  section:nth-child(3) {
    grid-column: 7 / span 3;
  }

  section:nth-child(4) {
    grid-column: 10 / span 3;
  }

  // 1440px Desktop ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.desktop1440}) {
    height: 24.62vw;

    // Sections Container
    #sections-container {
      width: 100%;
    }
  }

  // 850px Tablet ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.tablet850}) {
    height: 30.161vw;

    // Sections Container
    #sections-container {
      grid-template-columns: repeat(3, minmax(0, 1fr));

      .tablet-section-none {
        display: none !important;
        visibility: hidden !important;
      }

      section:first-child {
        grid-column: 1 / span 1 !important;
        order: ${(props) => (props.order == 4 ? 1 : 1)} !important;
      }

      section:nth-child(2) {
        grid-column: 2 / span 1 !important;
        order: ${(props) => (props.order == 4 ? 2 : 2)} !important;
      }

      section:nth-child(3) {
        grid-column: ${(props) =>
          props.order == 4 ? "4 / span 1" : "3 / span 1"} !important;
        order: ${(props) => (props.order == 4 ? 4 : 3)};
      }

      section:nth-child(4) {
        grid-column: ${(props) =>
          props.order == 4 ? "3 / span 1" : "4 / span 1"} !important;
        order: ${(props) => (props.order == 4 ? 3 : 4)};
      }
    }
  }

  // 525px Mobile ------------------------------------------------------------------------------------
  @media (max-width: ${breakpoints.mobile525}) {
    height: 44.189vw;

    // Sections Container
    #sections-container {
      grid-template-columns: repeat(2, minmax(0, 1fr));

      .mobile-section-none {
        display: none !important;
        visibility: hidden !important;
      }

      section:first-child {
        grid-column: ${(props) =>
          props.order == 2
            ? "2 / span 1"
            : props.order == 3
            ? "4 / span 1"
            : "1 / span 1"} !important;
        order: ${(props) =>
          props.order == 4
            ? 1
            : props.order == 2
            ? 2
            : props.order == 3
            ? 4
            : 1} !important;
      }

      section:nth-child(2) {
        grid-column: ${(props) =>
          props.order == 4
            ? "3 / span 1"
            : props.order == 2
            ? "1 / span 1"
            : props.order == 3
            ? "1 / span 1"
            : "2 / span 1"} !important;
        order: ${(props) =>
          props.order == 4
            ? 3
            : props.order == 2
            ? 1
            : props.order == 3
            ? 1
            : 2} !important;
      }

      section:nth-child(3) {
        grid-column: ${(props) =>
          props.order == 4
            ? "4 / span 1"
            : props.order == 3
            ? "2 / span 1"
            : "3 / span 1"} !important;
        order: ${(props) =>
          props.order == 4
            ? 4
            : props.order == 2
            ? 3
            : props.order == 3
            ? 2
            : 3} !important;
      }

      section:nth-child(4) {
        grid-column: ${(props) =>
          props.order == 4 ? "2 / span 1" : "4 / span 1"} !important;
        order: ${(props) =>
          props.order == 4 ? 2 : props.order == 2 ? 4 : 4} !important;
      }
    }
  }
`;

export default Container;
