import React from "react";
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragment from "./components/basicos/Fragment";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

const App = () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Card titulo="#04 - Valor Aleatŕorio">
      <Aleatorio min={1} max={60} />
    </Card>

    <Card titulo="#03 - Fragmento">
      <Fragment />
    </Card>

    <Card titulo="#02 - Com Parâmetro">
      <ComParametro titulo="Sitação do aluno" aluno="Pedro" nota={9.3} />
    </Card>

    <Card titulo="#01 - Primeiro Componente">
      <Primeiro></Primeiro>
    </Card>
  </div>
);
export default App;
