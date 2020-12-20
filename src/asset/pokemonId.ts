export const PokemonId = (id: number) => {
  function pad(n: string, width: number, z: string) {
    z = z || '0'
    n = n + ''
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
  }
  let idTitle = pad(id.toString(), 3, '')
  idTitle = '#' + idTitle

  return idTitle
}
