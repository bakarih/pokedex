import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex/Pokedex';

let poke: any = [];

function fetchPokemonData(pokemen: any){
  let url = pokemen.url;
  fetch(url)
  .then(async response => response.json())
  .then(async function(pokeData: any){
    try {
      poke.push(pokeData);
    } catch (error) {
      console.error(error);
    }  
  })
}

function fetchAllpokemon(){
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(async response => response.json())
  .then(async function(allpokemon) {
    allpokemon.results.forEach(async function(pokemon: any){
      fetchPokemonData(pokemon);
    });
  })
}

class App extends React.Component {
  componentDidMount(){
    fetchAllpokemon()
  }

  handleSearchInput(inputValue: any){
    console.log(inputValue);
  }

  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex 
          data={poke}
          onInputChange={this.handleSearchInput}
        />
          
      </div>
    )    
  }
}
    

export default App;
