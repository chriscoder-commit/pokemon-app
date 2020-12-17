import React from 'react'
import Nav from './Nav'
import Main from './Main'
import FetchPokemonApi from "./pokeapi"


const App = () => {
  return (
    <div>
      {/* this is what is rendering my pokemon */}
      <FetchPokemonApi>
      </FetchPokemonApi>
      <Nav />
      <Main />
    </div> 
  );
}

export default App;
