import React from "react";

function Pokemon(props) {
    const {pokemon} = props;
    return(
        <div>
            <div>
                <img src={pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']} alt={pokemon.name} />
            </div>
            <div>
                <div>
                    <div>
                        <span>{pokemon.id}</span> - <span>{pokemon.name}</span>
                    </div>                    
                </div>
                <div>
                    <div>
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index}>{type.type.name}</div>
                            )
                        })} 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;