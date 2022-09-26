import React, {useState} from "react";
import {searchPokemon} from "../../api"

function Search(props) {

    const [input, setInput] = useState('');

    const onChangeSearch = (e) => {
        setInput(e.target.value);
        props.onChangeSearchValue(e.target.value);
    }

    /*const onButtonClickHandler = () => {
        onSearchHandler(search)
        //console.log("pokemon", search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }*/

    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input inputMode="text" value={input} onChange={onChangeSearch} className='search-label' placeholder="Digite o nome do pokemon"/>
            </div>
            <div className="searchbar-btn">
            </div>
        </div>
    );
}

export default Search;