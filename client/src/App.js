import React from "react";
import "./App.css";

let url_presidente_segundo_turno =
  "https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json";

function acao_botao() {
  console.log("Buscando");
  fetch(url_presidente_segundo_turno)
    .then(function (resposta) {
      resposta.json()
        .then(function (resultado_da_eleição) {
         

          
    
          let obj_candidatos_segundo_turno = resultado_da_eleição.cand;

          let porcentagem_totalizada = resultado_da_eleição.pst;
          console.log(
            "Porcentagem de urnas apuradas:" + porcentagem_totalizada + "%"
          );

          for (var i = 0; i <= obj_candidatos_segundo_turno.length - 1; i++) {
            let obj_candidato = obj_candidatos_segundo_turno[i];

            let votos_validos = obj_candidato.pvap;
            let vice_presidente = obj_candidato.nv;
            let coligação = obj_candidato.cc;
            let nome_candidato = obj_candidato.nm;
            let quantidade_votos_totais = obj_candidato.vap;
            let status_candidato = obj_candidato.st;

            console.log("Votos Validos:" + votos_validos + "%");
            console.log("Vice Presidente:" + vice_presidente);
            console.log("Coligação:" + coligação);
            console.log("Nome Canditado:" + nome_candidato);
            console.log("Quantidade de Votos Validos:" + quantidade_votos_totais);
            console.log("Candidato Eleito ou Não Eleito?:" + status_candidato);

            console.log("------------------------------------------");
        }


        })
        .catch(function (erro) {
          console.log("Ocorreu um e rro durante o JSON: " + erro);
        });

    })
    .catch(function (erro) {
      console.log("Ocorreu um erro durante o FECTH: " + erro);
    });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button name="Resultados" onClick={acao_botao}>
          Resultado 2ª Turno
        </button>
      </header>
    </div>
  );
}

export default App;
