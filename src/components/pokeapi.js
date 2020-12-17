import React from 'react'

// note don't need to export at bottom because it's being exported here
export default class FetchPokemonApi extends React.Component {
  state = {
    loading: true,
    pokemon: null,
  }

  async componentDidMount() {
    const pokeUrl = "https://pokeapi.co/api/v2/pokemon?limit=10";
    const response = await fetch(pokeUrl);
    // response.json gets us the actual data
    const pokeData = await response.json();
    this.setState({ pokemon: pokeData.results[6], loading: false });
    console.log(pokeData);

  }


  render() {
    return (
      <div>
        {this.state.loading ? <div>loading!</div> : <div>{this.state.pokemon.name}</div> }
      </div>
    )
  }


}
