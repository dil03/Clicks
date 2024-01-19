import { useState } from 'react';
import './App.css';
import Count from './components/Count';
import Botonincre from './components/Botonincre';
import Botonreini from './components/Botonreini';

function App() {

  const  [vercontador, setContador] = useState(0); 
  const IncrementarContador = () =>{
    setContador(vercontador+1);
  }
 const [reiniciar,setReiniciar] = useState(0)
 const Reiniciarcontador = () =>{
  setContador(0);
  setReiniciar(0);
  
 }
  return (
    <div className="App">
      <h1>Contador de Clicks</h1>
      <Count vercontador={vercontador}/>
      <Botonincre incremButton={IncrementarContador}/>
      <Botonreini reiniciar={Reiniciarcontador}/>
    </div>
    
  );
}

export default App;
