import React, { Component } from "react";
import Container from "./styled";
import Vimeo from "@u-wave/react-vimeo";

export default class Reproductor extends Component {
  render() {
    return (
      <Container>
        <Vimeo
          video="115783408"
          autoplay
          id="vimeo-player"
          color="ff4d00"
          showTitle={false}
          showPortrait={false}
          dnt={false}
          showByline={false}
          transparent={true}
          responsive={true}
          autopause={true}
          className="opacidad06"
        />
      </Container>
    );
  }
}
