import { create } from "zustand";
import { fecthPokemonType } from "../services/fecthPokemons";

export const usePokemonsStore = create((set) => ({
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

      set({ pokemonsFilterType: data})
    } catch (error) {
      console.log(error);
      
    }
  }
}))