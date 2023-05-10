import { Button } from '../Button/Button';
import { User } from '../User/User';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React doc - Inicio Rapido</h1>
      <hr/>
      <User />
      <hr/>
      <h2>Crear y anidar componentes</h2>
      <Button />
    </div>
  );
}

export default App;
