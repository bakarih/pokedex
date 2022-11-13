import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.css";


export default function PokeList(props: any){
    return (
        <div className="pokelist">
            {
                props.list.map((pokeStuff: any) => {
                    console.log(pokeStuff.id);
                    return <PokeCard 
                        id={pokeStuff.id}
                        name={pokeStuff.name} 
                        url={pokeStuff.sprites.front_default}
                    />
                })
            }
        </div>
    )
}