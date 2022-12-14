import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');

  const getPokemons = async (limit = 200, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}$offset=${offset}`;
        const response = await fetch(url)
        return await response.json()
    } catch (error){
        console.log("erro: ", error)
    }
  }

  const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error){
        console.log("erro: ", error)
    }
  }

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promisses = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })

      const results = await Promise.all(promisses)
      setPokemons(results);
      setLoading(false);
    } catch (error) { 
      console.log("fetchPokemons error: ", error)
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [])

  const handleSearchValue = (value) => {
    setSearch(value);
  }

  return (
    <main>
      <div className="container">
        <Navbar />
        <Searchbar 
          onChangeSearchValue={handleSearchValue} 
        />
        <Pokedex
          loading={loading} 
          pokemons={pokemons.filter(pokemon => pokemon.name.includes(search.toLowerCase()))} 
        />
      </div>    
    </main>
  )
}

export default App