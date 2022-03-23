import React from 'react';

const Pokemon = function ({ pokemon }: {pokemon: any}) {
  return (
    <div className='flex flex-col w-1/8 m-2'>
      <img className='bg-zinc-200 rounded-lg' alt={`${pokemon.name}`} src={pokemon?.avatar} />
      <div className="flex flex-col px-4">
        <p className="font-semibold text-gray-400">{formatId(pokemon?.id.toString())}</p>
        <p className="text-xl font-semibold my-2">{pokemon?.name}</p>
        <div className='flex m-1'>
          { pokemon?.types.map((type) => (
              createTag(type)
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
  }
}

function createTag(type: string){
  return  <p className={`${defineColor(type)} m-1 text-sm text-white rounded text-center w-1/2`}>{capitalizeFirstLetter(type)}</p>
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export default Pokemon;