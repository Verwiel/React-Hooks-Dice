import React from "react";
import './Styles/App.css'
import FreeRoll from './Games/FreeRoll'

function App() {


  return (
    <section className="App">
      <header>
        <h1>Dice</h1>
      </header>
      <main>
        <FreeRoll />
      </main>
      <footer>
        <p>Created by: <a href='#'>Drew Verwiel</a></p>
      </footer>
    </section>
  );
}

export default App;