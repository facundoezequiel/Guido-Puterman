import React from "react";
// Container
import SobremiContainer from "../containers/sobremi-container";

export default function SobremiPage({ idioma, idiomaEng, idiomaEsp }) {
  return (
    <SobremiContainer
      idioma={idioma}
      idiomaEng={idiomaEng}
      idiomaEsp={idiomaEsp}
    ></SobremiContainer>
  );
}
