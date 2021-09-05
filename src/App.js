import { useEffect, useState } from 'react';
import { ArtContainer } from './components/ArtContainer/ArtContainer';
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
      <Nav />
      <ArtContainer articles={dummies} />
    </div>
  );
}

export default App;
