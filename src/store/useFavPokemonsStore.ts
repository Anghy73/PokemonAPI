import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PokemonsResults } from '../types'

interface FavPokemons {
  pokemonsFav: PokemonsResults[]
  addPokeFav: (pokemon: {url: string, name: string}) => void
}

export const useFavPokemonsStore = create<FavPokemons>()(persist((set, get) => {
  return {
    pokemonsFav: [],

    addPokeFav: (pokemon: { url: string, name: string }) => {
      const pokemonsFav = get().pokemonsFav
      const poke = pokemonsFav.find(poke => poke.url == pokemon.url)
      if (poke != undefined) return

      const clonePokemonsFav = structuredClone(pokemonsFav)
      clonePokemonsFav.push(pokemon)
      // console.log(pokemonsFav);
      set({pokemonsFav: clonePokemonsFav})
    }
  }
}, { name: 'favPokemons' }))
