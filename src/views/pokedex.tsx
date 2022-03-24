import React, { useState, useEffect } from 'react';
import Pokemon from '../components/pokemon'
interface PokemonProps {
    id: number;
    forms: any;
    types: any;
}

const Pokedex = function () {
    const [pokemonList, setPokemonList] = useState<PokemonProps[] | []>([]);
    const [loadPokemon, setLoadPokemon] = useState(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
    );

    const getAllPokemons = async () => {
        const response = await fetch(loadPokemon);
        const data = await response.json();
        setLoadPokemon(data.next);

        function createPokemonObject(result) {
        result.forEach(async (pokemon) => {
            const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            const data = await response.json();
            setPokemonList((currentList) => [...currentList, data]);
        });
        }
        createPokemonObject(data.results);
        console.log(pokemonList);
    };
    useEffect(() => {
        getAllPokemons();
    }, []);

    return (
        <div className='flex flex-col items-center bg-gray-300'>
            <img className='w-1/6' src="https://1000marcas.net/wp-content/uploads/2020/01/Pokemon-Logo.png" alt="Pokemon Logo" />
            <div className='flex flex-wrap justify-center w-2/3 h-full py-6 bg-white'>
                {pokemonList.map((pokemon) => (
                    <Pokemon key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
            <button className="justify-center p-2 my-6 text-white rounded-md bg-cyan-500" 
                onClick={() => getAllPokemons()}>
                Load more Pokémon
            </button>
        </div>
    );
  };

  export default Pokedex;