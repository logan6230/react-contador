import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Perfil from "./componentes/Perfil";
import Contador from "./componentes/Contador";

function App() {
  const persons = [
    {
      nombre: "Brais Moure",
      pais: "España",
      imagen: "brais",
      cargo: "Ingeniero de Software",
      empresa: "MoureDev",
      perfil:
        "Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev",
      redes: {
        linkedin: "https://www.linkedin.com/in/braismoure/",
        youtube: "https://www.youtube.com/@mouredev",
        twitter: "https://twitter.com/MoureDev",
      },
    },
  ];
  return (
    <div className="App">
      <div class="contenedor-principal">
        <h1>Mis desarrolladores favoritos son</h1>
        {persons.map((person) => (
          <Perfil
            key={person.nombre}
            nombre={person.nombre}
            pais={person.pais}
            imagen={person.imagen}
            cargo={person.cargo}
            empresa={person.empresa}
            perfil={person.perfil}
            redes={person.redes}
          />
        ))}
        {/* <Contador /> */}
      </div>
    </div>
  );
}

export default App;
