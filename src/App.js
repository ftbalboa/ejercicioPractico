import { useEffect, useState } from 'react';
import { Article } from './components/Article';
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
        {dummies.map((dummy, index)=>(<Article info={dummy} key={index}/>))}
      </header>
    </div>
  );
}

export default App;
