// @ts-nocheck
import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex/Pokedex';

async function fetchAllPokemon() {
  try {
    const allPokemonResponse = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );

    if (!allPokemonResponse.ok) {
      throw Error(`${response.status}: ${response.statusText}`);
    }

    return await allPokemonResponse.json();
  } catch (e) {
    console.log(e);
  }
}

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      fetching: false,
      pokemonList: [],
    };
  }

  async componentDidMount() {
    const pokemonList = await fetchAllPokemon();
    this.setState({ pokemonList });
  }

  handleSearchInput(inputValue: any) {
    console.log(inputValue);
  }

  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex
          data={this.state.pokemonList}
          onInputChange={this.handleSearchInput}
        />
      </div>
    );
  }
}

export default App;
