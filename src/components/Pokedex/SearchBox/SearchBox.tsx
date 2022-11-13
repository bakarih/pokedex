import React from "react";
import "./SearchBox.css";

const SearchBox = (props: any) => {
    return (
        <input 
            type="search" 
            className="search" 
            placeholder="Pokemon Search" 
            onChange={(e) => {
                props.handleSearchBox(e.target.value);
            }}
        />
    )
}

export default SearchBox;
