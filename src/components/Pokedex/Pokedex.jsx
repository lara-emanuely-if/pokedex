import React from "react";
import Pokemon from "./Pokemon/Pokemon";

function Pokedex(props) {

    const {pokemons, loading} = props;


    return(
        <div>
            <div>
            
            </div>
            <div>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div>
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