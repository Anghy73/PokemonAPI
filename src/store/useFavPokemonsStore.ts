import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PokemonsResults } from '../types'
import { toast } from 'sonner'

interface FavPokemons {
  pokemonsFav: PokemonsResults[]
  addPokeFav: (pokemon: {url: string, name?: string | undefined}) => void
  delPokeFav: (name: string) => void
}

export const useFavPokemonsStore = create<FavPokemons>()(persist((set, get) => {
  return {
    pokemonsFav: [],

    addPokeFav: (pokemon: { url: string, name: string }) => {
      const pokemonsFav = get().pokemonsFav
      const delPokeFav = get().delPokeFav
      const poke = pokemonsFav.find(poke => poke.url == pokemon.url)
      if (poke != undefined) {
        return delPokeFav(pokemon.name)
      }

      const clonePokemonsFav = structuredClone(pokemonsFav)
      clonePokemonsFav.push(pokemon)
      set({pokemonsFav: clonePokemonsFav})
    },

    delPokeFav: (name: string) => {
      const pokemonsFav = get().pokemonsFav

      const clonePokemonsFav = structuredClone(pokemonsFav)
      const filterPokes = clonePokemonsFav.filter(poke => poke.name != name)

      set({ pokemonsFav: filterPokes })
    }
  }
}, { name: 'favPokemons' }))
