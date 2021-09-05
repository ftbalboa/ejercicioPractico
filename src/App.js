import { useEffect, useState } from 'react';
import { Article } from './components/Article';
import { Nav } from './components/Header/Nav';
import { GenDummies } from './functions/GenDummies';
import './scss/styles.scss';

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
      <Nav />
        {dummies.map((dummy, index)=>(<Article info={dummy} key={index}/>))}
      </header>
    </div>
  );
}

export default App;
