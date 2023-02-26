import React, { Component } from "react";
import Container from "./styled";
import Vimeo from "@u-wave/react-vimeo";
import "vidstack/styles/base.css";
import "vidstack/styles/ui/buttons.css";
import "vidstack/styles/ui/sliders.css";
import { MediaOutlet, MediaPlayer } from "@vidstack/react";

export default class Reproductor extends Component {
  render() {
    return (
      <Container>
        {/* Max Width Container
        <Vimeo
          video="https://vimeo.com/178084247"
          autoplay
          id="vimeo-player"
          color="C3FF00"
          showTitle={false}
          showPortrait={false}
          dnt={false}
          showByline={false}
          transparent={true}
          responsive={true}
          autopause={true}
          className="opacidad06"
        />
         */}
        <video autoPlay={true} muted>
          <source
            src="https://onedrive.live.com/download.aspx?resid=cab5a20b266f16af%212889397&authkey=ABboL7Fu6VTPhi4"
            type="video/mp4"
          ></source>
        </video>
      </Container>
    );
  }
}
