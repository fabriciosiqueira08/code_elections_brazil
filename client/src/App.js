import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./api";

export default function App() {

  const [cand, setCand] = useState();
  console.log(cand);

useEffect(() => {
  api
  .get("")
  .then((response) => setCand(response.data))
  .catch((err) => {
    console.error("ops! ocorreu um erro" + err);
  });
}, []);

return (
  <div className="App" >
    <p>Data da Eleição: {cand?.dg}</p>
    <p>Votos Validos: {cand?.vv}</p>
    <p>Porcentagem de urnas apuradas: {cand?.pst + "%"}</p>
  </div>
  
);

}

