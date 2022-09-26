import React from "react";
import Pokemon from "./Pokemon/Pokemon";
import Pagination from "../Pagination/Pagination";

function Pokedex(props) {

    const {pokemons, loading, page, setPage, totalPages} = props;

    const onLeftClickHandler = () => {
        if(page > 0) {
            setPage(page-1)
        }
    }

    const onRightClickHandler = () => {
        if(page+1 !== totalPages){
            setPage(page+1)
        }
    }

    return(
        <div className="poke">
            <div className="pokedex-header">
                <Pagination 
                    page={page+1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                />
            </div>
            <div>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (<div>
                            <Pokemon key={index} pokemon={pokemon} />
                        </div>)
                    })}
                </div>
            )}
            </div>
            <div>
            </div>
        </div>
    );
}

export default Pokedex