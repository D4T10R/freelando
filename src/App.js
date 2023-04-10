import { Card } from "./componentes/Card/Card";
import { Cabecalho } from "./componentes/Cabecalho/Cabecalho";
import { Estilos } from "./componentes/EstilosGlobais/Estilos";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema";

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Card>
        <h1>teste</h1>
      </Card>
    </ProvedorTema>
  );
}

export default App;
