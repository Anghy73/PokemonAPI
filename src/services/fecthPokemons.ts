const BASE_URL_API = import.meta.env.VITE_BASE_URL_API

export const fecthPokemons = async ({ offsetValue, limitValue }: { offsetValue: number, limitValue: number }) => {
  const response = await fetch(`${BASE_URL_API}/pokemon?offset=${offsetValue}&limit=${limitValue}`)
  const json = await response.json()
  return json
}

export const fecthPokemonsTypes = async () => {
  const response = await fetch(`${BASE_URL_API}/type`)
  const json = await response.json()
  return json
}

export const fecthPokemonType = async (typeNumber: number | null) => {
  const response = await fetch(`${BASE_URL_API}/type/${typeNumber}`)
  const json = await response.json()
  return json
}

export const fetchAllPokemons = async () => {
  const response = await fetch(`${BASE_URL_API}/pokemon?limit=100000&offset=0`)
  const json = await response.json()
  return json
}