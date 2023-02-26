import React from "react";
// Styled Components
import Container from "./styled";
// Librerias
import Marquee from "react-fast-marquee";
// Components
import Fila from "./fila";

export default function Work({ idioma }) {
  return (
    <Container>
      <div id="marquee-container">
        <Marquee gradient={false} speed="45">
          <p>
            MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;MY&ensp;WORKS&ensp;-&ensp;
          </p>
        </Marquee>
      </div>
      {/* Max Width Container */}
      <div id="max-width-container">
        {/* Works Container */}
        <div id="works-container">
          <Fila
            video="/works/zara/principal.mp4"
            order={1}
            titulo="COLLECTION"
            cliente="ZARA"
            fecha="2023"
            link="/vogue"
          ></Fila>
          <Fila
            video="/works/kosiuko/principal.mp4"
            order={4}
            titulo="COLLECTION"
            cliente="KOSIUKO"
            fecha="2022"
            link="/vogue"
          ></Fila>
          <Fila
            video="/works/levis/principal.mp4"
            order={2}
            titulo="COLLECTION"
            cliente="LEVIS"
            fecha="2021"
            link="/vogue"
          ></Fila>
          <Fila
            video="/works/rapsodia/principal.mp4"
            order={3}
            titulo="COLLECTION"
            cliente="RAPSODIA"
            fecha="2022"
            link="/vogue"
          ></Fila>
          <Fila
            video="/works/unitivo/principal.mp4"
            order={1}
            titulo="COLLECTION"
            cliente="UNITIVO"
            fecha="2023"
            link="/vogue"
          ></Fila>
          <Fila
            video="/works/kosiuko/principal.mp4"
            order={4}
            titulo="COLLECTION"
            cliente="KOSIUKO"
            fecha="2022"
            link="/vogue"
          ></Fila>
          <Fila
            video="/works/levis/principal.mp4"
            order={2}
            titulo="COLLECTION"
            cliente="LEVIS"
            fecha="2021"
            link="/vogue"
          ></Fila>
          <Fila
            video="/works/rapsodia/principal.mp4"
            order={3}
            titulo="COLLECTION"
            cliente="RAPSODIA"
            fecha="2022"
            link="/vogue"
          ></Fila>
        </div>
      </div>
    </Container>
  );
}
