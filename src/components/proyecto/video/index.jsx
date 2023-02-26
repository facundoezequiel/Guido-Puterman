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
        {/* Video Container */}
        <div id="video-container">
          <Fade duration={1000} className="fade-container-video">
            <Reproductor></Reproductor>
          </Fade>
        </div>
        {/* Texto Container */}
        <div id="texto-container">
          <Fade duration={1000} className="fade-container">
            <div id="texto-container-textos">
              <p>
                Fashion film for Vogue Brasil with the amazing model Adriana
                Lima shot at Cantagalo, Rio de Janeiro, Brazil.
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
    </Container>
  );
}
