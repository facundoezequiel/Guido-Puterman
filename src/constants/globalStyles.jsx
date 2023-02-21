import { createGlobalStyle } from "styled-components";
import Colors from "./colors";

const GlobalStyle = createGlobalStyle`

:root{
    color-scheme: dark;
    --blanco: ${Colors.blanco.toCSS()};
    --negro: ${Colors.negro.toCSS()};
    --gris: ${Colors.gris.toCSS()};
    --grisClaro: ${Colors.grisClaro.toCSS()};
    --grisClaro2: ${Colors.grisClaro2.toCSS()};
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(--negro);
}

// VCR Font
@font-face {
  font-family: "VCR";
  src: url("/fonts/VCR/VCR.ttf");
  font-style: normal;
  font-weight: 400;
}

// Akkurat Font
@font-face {
  font-family: "Akkurat";
  src: url("/fonts/Akkurat/Akkurat-Mono.otf");
  font-style: normal;
  font-weight: 400;
}

// Tomato Font
@font-face {
  font-family: "Tomato";
  src: url("/fonts/Tomato/TomatoGrotesk-Thin.otf");
  font-style: normal;
  font-weight: 200;
}

@font-face {
  font-family: "Tomato";
  src: url("/fonts/Tomato/TomatoGrotesk-Light.otf");
  font-style: normal;
  font-weight: 300;
}

@font-face {
  font-family: "Tomato";
  src: url("/fonts/Tomato/TomatoGrotesk-Regular.otf");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "Tomato";
  src: url("/fonts/Tomato/TomatoGrotesk-Bold.otf");
  font-style: normal;
  font-weight: 600;
}

// Animations
.opacidad02 {
    animation-name: opacidad;
    animation-duration: 0.2s;
    animation-iteration-count: initial;
    animation-timing-function: ease-in;
}

.opacidad06 {
    animation-name: opacidad;
    animation-duration: 0.6s;
    animation-iteration-count: initial;
    animation-timing-function: ease-in;
}

// Animations
.opacidad08 {
    animation-name: opacidad;
    animation-duration: 0.8s;
    animation-iteration-count: initial;
    animation-timing-function: ease-in;
}


@keyframes opacidad {
    from {
      opacity: 0%;
    }
    10% {
      opacity: 0%;
    }
    50% {
      opacity: 50%;
    }
    to {
      opacity: 100%;
    }
  }

  .topIn06 {
    animation-name: topIn;
    animation-duration: 0.6s;
    animation-iteration-count: initial;
    animation-timing-function: ease-out;
}

.topIn07 {
    animation-name: topIn;
    animation-duration: 0.7s;
    animation-iteration-count: initial;
    animation-timing-function: ease-out;
}

.flotar {
  transform: translatey(0px);
	animation: flotar 4s ease-in-out infinite;
}

.rotando {
	animation: rotar 1.5s linear infinite;
}

  @keyframes topIn {
    from {
      opacity: 0%;
      transform: translatey(40px);
    }
    10% {
      opacity: 0%;
      transform: translatey(40px);
    }
    70% {
      opacity: 50%;
    }
    to {
      opacity: 100%;
      transform: translatey(0px);
    }
  }

  @keyframes flotar {
    0% {
      transform: translatey(4px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(4px);
    }
  }

  @keyframes rotar {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`;

export default GlobalStyle;
