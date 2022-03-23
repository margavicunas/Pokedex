import React from 'react';
import Pokemon from '../components/pokemon'

const pokemonList = [
    {id: 11,
    name: 'juanito',
    types: ['fire', 'flying'],
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png'},
    {id: 2,
    name: 'manuelito',
    types: ['water', 'grass'],
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png'},
    {id: 35,
    name: 'adriano',
    types: ['flying'],
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png'},
    {id: 223,
    name: 'gustabo',
    types: ['fire'],
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png'},
    {id: 16,
    name: 'ricardo',
    types: ['fire', 'flying'],
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png'},
    {id: 200,
    name: 'gonzalito',
    types: ['fire', 'grass'],
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png'},
    {id: 35,
    name: 'adriano',
    types: ['flying'],
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png'},
    {id: 666,
    name: 'rosa maría',
    types: ['grass'],
    avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png'}]

const Pokedex = function () {
    return (
        <div className='flex justify-center bg-gray-300'>
            <div className='flex flex-wrap border-2 justify-center w-2/3 bg-white h-screen'>
            {pokemonList.map((pokemon) => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
            </div>
        </div>
    );
  };

  export default Pokedex;