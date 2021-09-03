import { useEffect, useState } from 'react';
import { GenDummies } from './functions/GenDummies';
import './scss/App.scss';

function App() {
  const [dummies, setDummies] = useState([])
  useEffect(()=>{
    GenDummies().then((dummiesForStore)=>{
      setDummies(dummiesForStore)
    })
  },[setDummies])

  return (
    <div className="App">
      <header className="App-header">
        HOLA!
      </header>
    </div>
  );
}

export default App;
