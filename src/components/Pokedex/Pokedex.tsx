import React from "react";
import "./Pokedex.css";
import PokeList from "./PokeList/PokeList";
import PokeSearchResult from "./PokeSearchResult/PokeSearchResult";
import SearchBox from "./SearchBox/SearchBox";

export default function Pokedex(props: any){
    // console.log(props);
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox />
                <PokeList list={props.data}/>
            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult />
            </div>
        </div>   
    );
}