export function formatId(id: string){
    const finalId = 'N.º' + id.padStart(3, '0')
    return finalId
}

export function defineTagColor(type: string){
    if (type === 'fire') {
      return 'bg-orange-500'
    } else if (type === 'water') {
      return 'bg-sky-600'
    } else if (type === 'grass') {
      return 'bg-lime-500'
    } else if (type === 'flying') {
      return 'bg-type-flying'
    } else if (type == 'bug') {
      return 'bg-lime-600'
    } else if (type == 'normal') {
      return 'bg-zinc-400'
    } else if (type == 'ground') {
      return 'bg-type-ground'
    } else if (type == 'poison') {
      return 'bg-purple-400'
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
      return 'bg-orange-700'
    } else if (type == 'psychic') {
      return 'bg-pink-400'
    } else {
      return 'bg-stone-400'
    }
}

export function defineTextColor(type:string) {
  if (['grass', 'ground', 'normal', 'flying', 'electric', 'fairy'].includes(type)) {
    return 'text-black'
  } else {
    return 'text-white'
  }
}

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}