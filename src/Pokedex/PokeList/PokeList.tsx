import PokeCard from "./PokeCard/PokeCard";
import SearchBox from "./SearchBox/SearchBox";


export default function PokeList(){
    return (
        <div>
            <p>PokeList</p>
            <SearchBox />
            <PokeCard />
        </div>
    )
}