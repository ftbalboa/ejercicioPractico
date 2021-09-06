import { useEffect, useState } from "react";
import { ArtContainer } from "./components/ArtContainer/ArtContainer";
import { Nav } from "./components/Header/Nav";
import { GenDummies } from "./functions/GenDummies";
import "./scss/styles.scss";

function App() {
  // genera data para los articulos

  const loadData = ()=>{

    setDummies([...GenDummies(true)]);;
  }

  const [dummies, setDummies] = useState([]);
  useEffect(() => {
    loadData();
      }
  , []);

  // const loadData = ()=>{
  //   GenDummies().then((dummiesForStore) => {
  //     setDummies(dummiesForStore);
  //   }). catch((e)=>{
  //   setDummies([...GenDummies(true)]); console.log(e);})
  // }




  return (
    <div className="App">
      <Nav />
      {dummies.length > 0 && <ArtContainer articles={dummies} />}
    </div>
  );
}

export default App;
