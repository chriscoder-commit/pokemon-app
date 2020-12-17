import React from 'react'
import Nav from './Nav'
import Main from './Main'
import FetchPokemonApi from "./pokeapi"


const App = () => {
  return (
    <div>
      <Nav />

      {/* this is what is rendering my pokemon */}
      
      
      <Main />

      <FetchPokemonApi>
      </FetchPokemonApi>
    </div> 
  );
}

export default App;
