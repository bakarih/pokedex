import React from 'react';
import PokeCard from '../PokeCard/PokeCard';
import './PokeList.css';

export default function PokeList(props: any) {
  return (
    <div className="pokelist">
      {props.list?.map((pokemon: any) => {
        return <PokeCard pokemon={pokemon} />;
      })}
    </div>
  );
}
