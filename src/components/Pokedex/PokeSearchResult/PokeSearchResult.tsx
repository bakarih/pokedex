// import { useState } from "react";
import "./PokeSearchResult.css";

const PokeSearchResult = () => {
    const hasResult = false;
    return (
        <div className="pokeresult-card">
            {
                hasResult
                ? (
                    <div>
                        <p>Name: Pikachu</p>
                        <p>Abilities</p>
                        <p>Moves</p>
                        <p>Species</p>
                        <p>sprites</p>
                        <p>types</p>
                    </div>
                ) : (
                    <div>
                        <h2>Welcome to the Pokedex</h2>
                    </div>
                )
            }

        </div>
    )
}

export default PokeSearchResult;