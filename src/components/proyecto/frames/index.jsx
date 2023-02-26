import React from "react";
// Librerias
import Marquee from "react-fast-marquee";
// Styled Components
import Container from "./styled";
// Components
import Fila from "./fila";

export default function Frames({ idioma }) {
  return (
    <Container>
      <div id="marquee-container">
        <Marquee gradient={false} speed="35">
          <p>
            BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;BEST&ensp;SHOTS&ensp;-&ensp;
          </p>
        </Marquee>
      </div>
      {/* Max Width Container */}
      <div id="max-width-container">
        {/* Works Container */}
        <div id="works-container">
          <Fila
            video="/works/zara/principal.mp4"
            order={3}
            titulo="00:01:40"
          ></Fila>
          <Fila
            video="/works/kosiuko/principal.mp4"
            order={1}
            titulo="00:01:40"
          ></Fila>
          <Fila
            video="/works/levis/principal.mp4"
            order={4}
            titulo="00:01:40"
          ></Fila>
          <Fila
            video="/works/rapsodia/principal.mp4"
            order={2}
            titulo="00:01:40"
          ></Fila>
        </div>
      </div>
    </Container>
  );
}
