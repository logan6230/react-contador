import React from "react";
import "../estilos/Perfil.css";
import Contador from "./Contador";

function Perfil(props) {
  return (
    <div className="contenedor-perfil">
      <img
        className="imagen-perfil"
        src={require(`../imagenes/perfil-${props.imagen}.png`)}
        alt="Foto de desarrollador"
      />
      <div className="contenedor-texto-perfil">
        <p className="nombre-perfil">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-perfil">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-perfil">"{props.perfil}" </p>
      </div>
      <a href={props.redes.youtube} target="_blank" rel="noopener noreferrer">
        <Contador> YouTube</Contador>
      </a>

      <a href={props.redes.linkedin} target="_blank" rel="noopener noreferrer">
        <Contador>LinkedIn</Contador>
      </a>
      <a href={props.redes.twitter} target="_blank" rel="noopener noreferrer">
        <Contador>Twitter</Contador>
      </a>
    </div>
  );
}
export default Perfil;
