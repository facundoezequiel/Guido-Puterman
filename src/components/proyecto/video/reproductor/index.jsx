import React, { useState, useRef } from "react";
import Container from "./styled";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import Vimeo from "@u-wave/react-vimeo";

export default function Reproductor({ titulo, cliente, poster, video }) {
  return (
    <Container>
      <Vimeo
        video={video}
        responsive={true}
        showPortrait={false}
        showTitle={false}
        showByline={false}
        color="C3FF00"
        loop={true}
      />
    </Container>
  );
}
