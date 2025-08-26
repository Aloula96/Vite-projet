import { useState } from 'react'
import './App.css'


function Titre() {
  return <h1> Mon super titre </h1>
}

function Paragraphe({ string }) {
  return <p> {string} </p>
}

function Compteur() {
  const [number, setNumber] = useState(0);
  
  const increment = () => {
    setNumber(number + 1)
  }
  
  return <button onClick={()=>increment()}>Compter : {number}</button>;
}

function FormDemo() {
  const [txt, setTxt] = useState("");
  const submit = (e) => {
    e.preventDefault();
    alert(txt);
  };
  return (
    <form onSubmit={submit}>
      <label htmlFor="task">Tâche</label>
      <input id="task" value={txt} onChange={(e) => setTxt(e.target.value)} />
      <p> Tache à ajouter : {txt} </p>
      <button type="submit">Ajouter</button> <br />
      <button type='reset' onClick={()=> setTxt('')}> Reset </button>
    </form>
  );
}

function App() {
  return (
    <> 
      <Titre /> 
      <Paragraphe string='ceci est un premier paragraphe' />   
      <Paragraphe string='Ceci est mon deuxième paragraphe' /> 
      <Compteur />
      <FormDemo />
    </>
  )
}

export default App