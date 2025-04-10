const BASE_URL_API = import.meta.env.VITE_BASE_URL_API

export const fecthPokemons = async ({ offsetValue, limitValue }: { offsetValue: number, limitValue: number }) => {
  const response = await fetch(`${BASE_URL_API}/pokemon?offset=${offsetValue}&limit=${limitValue}`)
  const json = await response.json()
  return json
} 