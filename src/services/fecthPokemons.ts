const BASE_URL_API = import.meta.env.VITE_BASE_URL_API

export const fecthPokemons = async ({ offset = 0, limitValue = 0 }: { offset?: number, limitValue: number }) => {

  const response = await fetch(`${BASE_URL_API}/pokemon?offset=${offset}&limit=${limitValue}`)
  const json = await response.json()

  const nextPage = offset + limitValue
  
  return {
    pokemons: json.results,
    nextPage
  }
}

export const fecthPokemonsTypes = async () => {
  const response = await fetch(`${BASE_URL_API}/type`)
  const json = await response.json()
  return json
}

export const fecthPokemonType = async (typeNumber: number | null) => {
  const response = await fetch(`${BASE_URL_API}/type/${typeNumber}`)
  const json = await response.json()
  return json.pokemon
}

export const fetchAllPokemons = async () => {
  const response = await fetch(`${BASE_URL_API}/pokemon?limit=100000&offset=0`)
  const json = await response.json()
  return json.results
}

export const fetchGender = async (genderNumber: number | null) => {
  const response = await fetch(`${BASE_URL_API}/gender/${genderNumber}/`)
  const json = await response.json()
  return json.pokemon_species_details
}