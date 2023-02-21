import { React } from "react";
// Styled Components
import Container from "./styled";
// Componentes
import Reproductor from "./reproductor";
// Librerias
import { Slide, Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
// Íconos
import { TfiArrowTopRight } from "react-icons/tfi";

export default function Video({ idioma }) {
  return (
    <Container>
      <div id="marquee-container">
        <Marquee gradient={false} speed="35">
          <p>
            VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;VIDEO&ensp;-&ensp;
          </p>
        </Marquee>
      </div>
      {/* Max Width Container */}
      <div id="max-width-container">
        {/* Fila Dos */}
        <div id="fila">
          {/* Video Container */}
          <Fade duration={1000} className="fade-container-video">
            <div id="video-container">
              <Reproductor></Reproductor>
            </div>
          </Fade>
          {/* Texto Container */}
          <div id="texto-container">
            <Fade duration={1000} className="fade-container">
              <div id="texto-container-textos">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <div id="tags-container">
                  <p>#production</p>
                  <p>#editing</p>
                  <p>#filming</p>
                </div>
              </div>
              <button>
                COPY LINK
                <span>
                  <TfiArrowTopRight />
                </span>
              </button>
            </Fade>
          </div>
        </div>
      </div>
    </Container>
  );
}
