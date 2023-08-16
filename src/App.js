import logo from './logo.svg';
import './App.css';
import MiComponente from './Micomponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';
import { EventosComponente } from './EventosComponente';

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
          <EventosComponente />
          <hr/>
          <TercerComponente 
            nombre="Eduardo" 
            apellido="Cardona"
            ficha_medica= {ficha_medica}
            />
          <hr/>
          <MiComponente />
          <hr/>
          <SegundoComponente />
          <hr/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
