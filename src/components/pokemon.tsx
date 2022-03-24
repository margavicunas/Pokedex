import React from 'react';

const Pokemon = function ({ pokemon }: { pokemon: any }) {
  const name = pokemon.forms[0].name;
  return (
    <div className='flex flex-col m-2 w-1/8'>
      <img className='w-48 rounded-lg object-content bg-zinc-200' alt={`${ name }`} src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
      <div className="flex flex-col px-4">
        <p className="font-semibold text-gray-400">{ formatId(pokemon?.id.toString()) }</p>
        <p className="my-2 text-2xl font-semibold">{ capitalizeFirstLetter(name) }</p>
        <div className='flex m-1'>
          { pokemon?.types.map((slot) => (
              createTag(slot.type.name)
            )) }
        </div>
      </div>
    </div>
  );
};

function formatId(id: string){
  const finalId = 'N.º' + id.padStart(3, '0')
  return finalId
}

function defineColor(type: string){
  if (type === 'fire') {
    return 'bg-red-700'
  } else if (type === 'water') {
    return 'bg-cyan-600'
  } else if (type === 'grass') {
    return 'bg-lime-600'
  } else if (type === 'flying') {
    return 'bg-violet-600'
  } else if (type == 'bug') {
    return 'bg-emerald-700'
  } else if (type == 'normal') {
    return 'bg-gray-500'
  } else if (type == 'ground') {
    return 'bg-yellow-900'
  } else if (type == 'poison') {
    return 'bg-purple-700'
  } else if (type == 'ice') {
    return 'bg-sky-500'
  } else if (type == 'rock') {
    return 'bg-amber-600'
  } else if (type == 'electric') {
    return 'bg-orange-600'
  } else if (type == 'dragon') {
    return 'bg-indigo-300'
  } else if (type == 'fairy') {
    return 'bg-pink-400'
  } else if (type == 'fighting') {
    return 'bg-yellow-400'
  } else {
    return 'bg-fuchsia-700'
  }
}

function createTag(type: string){
  return  <p className={ `${defineColor(type)} m-1 text-xs text-white rounded text-center w-2/3` }>{ capitalizeFirstLetter(type) }</p>
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default Pokemon;