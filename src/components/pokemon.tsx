import React from 'react';
import { capitalizeFirstLetter, formatId, defineColor } from '../utils/pokemon';
import { PokemonDetail } from '../types/pokemon';

const Pokemon = function ({ pokemon }: { pokemon: PokemonDetail }) {
  const name = pokemon.forms[0].name;
  return (
    <div className='flex flex-col m-2 w-1/8 hover:animate-bounce-once'>
      <img className='w-48 rounded-lg object-content bg-zinc-200' alt={`${ name }`} src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
      <div className="flex flex-col px-4">
        <p className="font-semibold text-gray-400">{ formatId(pokemon?.id.toString()) }</p>
        <p className="mt-2 mb-1 text-2xl font-semibold">{ capitalizeFirstLetter(name) }</p>
        <div className='flex'>
          { pokemon?.types.map((slot) => (
              createTag(slot.type.name)
            )) }
        </div>
      </div>
    </div>
  );
};

function createTag(type: string){
  return  <p className={ `${defineColor(type)} mr-1 text-xs text-white rounded text-center w-[4rem]` }>{ capitalizeFirstLetter(type) }</p>
}

export default Pokemon;