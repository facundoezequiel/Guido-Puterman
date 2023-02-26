import React from "react";
import { useState } from "react";
// Librerías y estilos globales
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./constants/globalStyles";
// Pages
import HomePage from "./pages/home-page";
import SobremiPage from "./pages/sobre-mi-page";
import WorkPage from "./pages/work-page";

function App() {
  const [idioma, setIdioma] = useState(
    localStorage.getItem("guidoputerman-idioma") !== null
      ? localStorage.getItem("guidoputerman-idioma")
      : "esp"
  );

  function idiomaEsp() {
    setIdioma("esp");
    localStorage.setItem("guidoputerman-idioma", "esp");
  }

  function idiomaEng() {
    setIdioma("eng");
    localStorage.setItem("guidoputerman-idioma", "eng");
  }

  return (
    <div className="App">
      <Routes>
        {/* Home */}
        <Route
          exact
          path="/"
          element={
            <HomePage
              idioma={idioma}
              idiomaEng={idiomaEng}
              idiomaEsp={idiomaEsp}
            />
          }
        />
        {/* Sobre mi */}
        <Route
          exact
          path="/sobre-mi"
          element={
            <SobremiPage
              idioma={idioma}
              idiomaEng={idiomaEng}
              idiomaEsp={idiomaEsp}
            />
          }
        />
        {/* Work */}
        <Route
          exact
          path="/vogue"
          element={
            <WorkPage
              idioma={idioma}
              idiomaEng={idiomaEng}
              idiomaEsp={idiomaEsp}
            />
          }
        />
      </Routes>
      <GlobalStyle />
    </div>
  );
}

export default App;
