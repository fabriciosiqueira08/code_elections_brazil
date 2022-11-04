import React, { Component } from "react";
import "./App.css";
import api from "./api";

class App extends Component {

    state ={
     resultado_da_eleição:[],
    } 


async componentDidMount() {
   const resposta = await api.get('');
   this.setState({resultado_da_eleição: resposta.data});

}



render() {

  const { resultado_da_eleição } = this.state;

  return (
    
    <div>
      <h1>Resultado Eleições 2022</h1>
      {console.log(resultado_da_eleição)}
      {resultado_da_eleição.map(resultado_da_eleição => (
       <li key={resultado_da_eleição.cand}> 
          <h2>
           <strong> Teste </strong> 
           {resultado_da_eleição}
          </h2>
       
       </li>


      ) )}

    </div>
  );
};
};

    

export default App;
