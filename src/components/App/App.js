import { Button } from '../Button/Button';
import { ConditionalRendering } from '../ConditionalRendering';
import { Count } from '../Count';
import { List } from '../List';
import { User } from '../User/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React doc - Inicio Rapido</h1>
      <hr/>
      <Count/>
      <Count/>
      <hr/>
      <List/>
      <hr/>
      <ConditionalRendering/>
      <hr/>
      <User />
      <hr/>
      <h2>Crear y anidar componentes</h2>
      <Button text="Prueba" className="btn-green"/>
    </div>
  );
}

export default App;
