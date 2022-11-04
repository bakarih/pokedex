import PokeList from "./PokeList/PokeList";
import PokeSearchResult from "./PokeSearchResult/PokeSearchResult";

export default function Pokedex(){
    return (
        <div>
            <p>Pokedex</p>
            <PokeSearchResult />
            <PokeList />
        </div>
    )
}