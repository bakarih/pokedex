import React from 'react';
import './Pokedex.css';
import PokeList from './PokeList/PokeList';
import PokeSearchResult from './PokeSearchResult/PokeSearchResult';
import SearchBox from './SearchBox/SearchBox';

export default function Pokedex(props: any) {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBox handleSearchBox={props.onInputChange} />
        <PokeList list={props.data.results} />
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult />
      </div>
    </div>
  );
}
