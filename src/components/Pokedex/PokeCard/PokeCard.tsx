import React from "react";
import "./PokeCard.css";

const PokeCard = (props: any) => {
    // console.log("PokeCard data");
    // console.log(props);
    return (
        <div className="pokecard">
            <img src={props.url} alt="Default for Pokemon"/>
            <p>{props.name}</p>
        </div>
    )
}

export default PokeCard;