import React from 'react'

// note don't need to export at bottom because it's being exported here
export default class FetchPokemonApi extends React.Component {
  state = {
    loading: true,
    pokemon: null,
  }

  async componentDidMount() {
    const pokeUrl = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(pokeUrl);
    
    // response.json gets us the actual data
    const pokeData = await response.json();
    
    // let randomPokemon = pokeData.results[Math.floor(Math.random() * pokeData.results.length)];

    this.setState({ pokemon: pokeData.results, loading: false });

  

    console.log(pokeData);

  }


  render() {
    let items = [1, 2, 3, 4, 5];
    let page = items[Math.floor(Math.random() * items.length)];
    console.log(page)
    return (
      <div>
        {this.state.loading ? <div>loading!</div> : <div>{this.state.pokemon[page].name}</div> }
        
      </div>
    )
  }


}
