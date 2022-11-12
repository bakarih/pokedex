import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.css";


export default function PokeList(props: any){
    // console.log("PokeList props");
    // console.log(props);
    return (
        <div className="pokelist">
            {
                props.list.map((pokeStuff: any) => {
                    console.log(pokeStuff);
                    return <PokeCard 
                        name={pokeStuff.name} 
                        url={pokeStuff.sprites.front_default}
                    />
                })
            }
        </div>
    )
}