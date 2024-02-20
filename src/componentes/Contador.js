import React, { useState } from "react";

export default function Contador(props) {
  const [numero, setNumero] = useState(0);
  const aumentar = () => {
    setNumero(numero + 1);
  };

  // const disminuir = () => {
  //   setNumero(numero - 1);
  // };
  return (
    <div>
      {/* {<h1>Contador</h1> */}
      <p>Visitas {numero}</p> 
      <button onClick={aumentar}>{props.children}</button>
      {/* <button onClick={disminuir}>Disminuir</button> */}
    </div>
  );
}
