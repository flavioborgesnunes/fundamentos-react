import "./App.css";
import React from "react";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragment from "./components/basicos/Fragment";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

const App = () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#07 - Desafio Produtos" color="#0000cd">
        <ListaProdutos />
      </Card>

      <Card titulo="#06 -Lista de Alunos" color="#FF4C65">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componentes Com filhos" color="#00c8f8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Valor Aleatŕorio" color="#fa6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#e94c6f">
        <Fragment />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#e8b71a">
        <ComParametro titulo="Sitação do aluno" aluno="Pedro" nota={9.3} />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588c73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
export default App;
