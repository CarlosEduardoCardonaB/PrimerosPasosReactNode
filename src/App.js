import logo from './logo.svg';
import './App.css';
import MiComponente from './Micomponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {

  const ficha_medica={
    altura: "1,72",
    grupoSanguineo: "o+",
    estado: "bueno",
    alergias: "ninguna"

  }

  const num = 123;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <div className='components'>
          <TercerComponente 
            nombre="Eduardo" 
            apellido="Cardona"
            ficha_medica= {ficha_medica}
            />
          <hr></hr>
          <MiComponente />
          <hr></hr>
          <SegundoComponente />
          <hr></hr>
        </div>
        
      </header>
    </div>
  );
}

export default App;
