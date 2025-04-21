import { create } from "zustand";
import { fecthPokemonType } from "../services/fecthPokemons";

export const usePokemonsStore = create((set, get) => ({
  allPokemons: [],
  matchPokemons: [],
  pokemonName: '',
  pokemons: [],
  pokemonsFilterName: [],

  pokemonsFilterType: [],
  pokemonTypeNumber: null,
  typeIsLoading: false,
  // typeIsError: false,

  setPokemonType: (typeNumber: number) => set({ pokemonTypeNumber: typeNumber }),

  updatePokemonsFilterType: async (typeNumber: number) => {
    set({ typeIsLoading: true })

    try {
      const data = await fecthPokemonType(typeNumber)

      if (data) {
        set({ typeIsLoading: false })
      }

      set({ pokemonsFilterType: data })
    } catch (error) {
      console.log(error);

    }
  },
  // setMatchPokemons: (matchPokemons) => set({ matchPokemons }),

  setAllPokemons: (allPokemons) => set({ allPokemons }),
  setPokemonName: (pokemonName) => {
    const allPokemons = get().allPokemons
    set({ pokemonName })


    const matchPokemons = allPokemons.filter(poke => poke.name.startsWith(pokemonName))
    if (matchPokemons.length == allPokemons.length) {
      return set({ matchPokemons: [] })
    }
    
    set({ matchPokemons })
  },
}))