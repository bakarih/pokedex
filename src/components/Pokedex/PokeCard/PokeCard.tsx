// @ts-nocheck
import React, { useEffect, useState } from 'react';
import './PokeCard.css';

function useSinglePokemonDetails(pokemon: any) {
  const [details, setDetails] = useState(null);

  useEffect(
    function () {
      async function fetchDetails() {
        try {
          const pokemonDetailsResponse = await fetch(pokemon.url);

          if (!pokemonDetailsResponse.ok) {
            throw Error(`${response.status}: ${response.statusText}`);
          }

          setDetails(await pokemonDetailsResponse.json());
        } catch (error) {
          console.log(error);
        }
      }

      fetchDetails();
    },
    [pokemon.url]
  );

  return details;
}

export default function PokeCard(props: any) {
  const pokemonDetails: any = useSinglePokemonDetails(props.pokemon);

  // You probably should do something else here for CLS
  if (!pokemonDetails) return null;

  return (
    <div key={pokemonDetails?.id} className="pokecard">
      <img
        src={pokemonDetails?.sprites?.front_default}
        alt="Default for Pokemon"
      />
      <p>{pokemonDetails?.name}</p>
    </div>
  );
}
