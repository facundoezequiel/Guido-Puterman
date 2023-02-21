import React from "react";
// Container
import HomeContainer from "../containers/home-container";

export default function HomePage({ idioma, idiomaEng, idiomaEsp }) {
  return (
    <HomeContainer
      idioma={idioma}
      idiomaEng={idiomaEng}
      idiomaEsp={idiomaEsp}
    ></HomeContainer>
  );
}
