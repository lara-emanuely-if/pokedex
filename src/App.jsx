import React, {useEffect, useState} from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const itensPerPage = 27;

  const getPokemons = async (limit = 50, offset) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}`;
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
      const data = await getPokemons(itensPerPage, itensPerPage*page);
      const promisses = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })

      const results = await Promise.all(promisses)
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) { 
      console.log("fetchPokemons error: ", error)
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, [page])

  return (
    <main>
      <div className="container">
        <Navbar />
        <Pokedex
          loading={loading} 
          page={page} 
          setPage={setPage}
          totalPages={totalPages} 
          pokemons={pokemons} 
        />
      </div>    
    </main>
  )
}

export default App