import React from "react";
// Container
import WorkContainer from "../containers/work-container";

export default function WorkPage({ idioma, idiomaEng, idiomaEsp }) {
  return (
    <WorkContainer
      idioma={idioma}
      idiomaEng={idiomaEng}
      idiomaEsp={idiomaEsp}
    ></WorkContainer>
  );
}
