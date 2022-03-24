export function formatId(id: string){
    const finalId = 'N.º' + id.padStart(3, '0')
    return finalId
}

export function defineColor(type: string){
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

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}