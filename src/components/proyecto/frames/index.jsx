import React from "react";
// Librerias
import { Slide, Fade } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";
// Styled Components
import Container from "./styled";
// Components
import ImageCard from "./image-card";
import TextCard from "./text-card";

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
        {/* Frames Container */}
        <div id="frames-container">
          {/* ------------------- Fila 1 ------------------- */}
          <div id="titulo-container">
            <Slide direction="left">
              <h2>
                Best
                <br />
                shots
                <img alt="Chat Emoji" src="/images/emojis/clip.png"></img>
              </h2>
            </Slide>
          </div>
          {/* Card */}
          <TextCard vacia={true}></TextCard>
          {/* Card */}
          <TextCard vacia={true}></TextCard>
          {/* Card */}
          <ImageCard
            imagen="/images/works/zara.jpg"
            alt="Prueba imagen"
          ></ImageCard>
          {/* ------------------- Fila 2 ------------------- */}
          {/* Card */}
          <TextCard vacia={true}></TextCard>
          {/* Card */}
          <ImageCard
            imagen="/images/works/zara.jpg"
            alt="Prueba imagen"
          ></ImageCard>
          {/* Card */}
          <TextCard vacia={true}></TextCard>
          {/* Card */}
          <TextCard vacia={true}></TextCard>
          {/* ------------------- Fila 3 ------------------- */}
          {/* Card */}
          <TextCard vacia={true}></TextCard>
          {/* Card */}
          <TextCard vacia={true}></TextCard>
          {/* Card */}
          <ImageCard
            imagen="/images/works/zara.jpg"
            alt="Prueba imagen"
          ></ImageCard>
          <TextCard vacia={true}></TextCard>
          {/* ------------------- Fila 4 ------------------- */}
          {/* Card */}
          <ImageCard
            imagen="/images/works/zara.jpg"
            alt="Prueba imagen"
          ></ImageCard>
          {/* Card */}
          <TextCard vacia={true}></TextCard>
          {/* Card */}
          <TextCard vacia={true}></TextCard>
          {/* Card */}
          <div id="gracias-container">
            <Slide direction="right">
              <p>
                THANKS FOR<br></br>WATCHING!
              </p>
              <img alt="Heart Emoji" src="/images/emojis/corazon.png"></img>
            </Slide>
          </div>
        </div>
      </div>
    </Container>
  );
}
