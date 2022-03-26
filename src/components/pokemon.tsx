import React from 'react';
import { capitalizeFirstLetter, formatId,
         defineTagColor, defineTextColor } from '../utils/pokemon';
import { PokemonDetail } from '../types/pokemon';

const Pokemon = function ({ pokemon }: { pokemon: PokemonDetail }) {
  const name = pokemon.forms[0].name;
  return (
    <div className='flex flex-col mx-1 mb-12 transition duration-100 hover:-translate-y-2'>
      <img className='w-[18rem] rounded object-content bg-zinc-100' alt={`${ name }`} src={ `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id.toString().padStart(3, '0')}.png`} />
      <div className="flex flex-col px-4">
        <p className="text-xs font-bold text-slate-400">{ formatId(pokemon?.id.toString()) }</p>
        <p className="mt-2 mb-1 text-xl font-semibold">{ capitalizeFirstLetter(name) }</p>
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
  return  <p className={ `${defineTagColor(type)} mr-1 text-xs ${defineTextColor(type)} rounded text-center w-[5rem] py-[0.02rem]` }>{ capitalizeFirstLetter(type) }</p>
}

export default Pokemon;