import { create } from "zustand";
import { fecthPokemonType, fetchGender } from "../services/fecthPokemons";

interface PokemonStore {
  allPokemons: { name: string }[]
  matchPokemons: {
    url: string; name: string 
}[]
  pokemonName: string
  pokemons: []
  pokemonsFilterName: []
  pokemonsFilterType: []
  pokemonTypeNumber: number | null
  typeIsLoading: boolean
  gender: string
  pokemonsFilterGender: []
  genderIsLoading: boolean

  setGender: (gender: string) => void
  setPokemonType: (typeNumber: number | null) => void
  updatePokemonsFilterType: (typeNumber: number) => void
  setAllPokemons: (allPokemons: { name: string }[]) => void
  setPokemonName: (pokemonName: string) => void
  updateGender: (genderNumber: number | null) => void
}

export const usePokemonsStore = create<PokemonStore>((set, get) => ({
  allPokemons: [],
  matchPokemons: [],
  pokemonName: '',
  pokemons: [],
  pokemonsFilterName: [],
  pokemonsFav: [],

  pokemonsFilterType: [],
  pokemonTypeNumber: null,
  typeIsLoading: false,
  // typeIsError: false,

  gender: '',
  pokemonsFilterGender: [],
  genderIsLoading: false,
  setGender: (gender: string) => set({ gender }),

  setPokemonType: (typeNumber: number | null) => set({ pokemonTypeNumber: typeNumber }),

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

  setAllPokemons: (allPokemons: { name: string }[]) => set({ allPokemons }),
  setPokemonName: (pokemonName: string) => {
    const allPokemons = get().allPokemons
    set({ pokemonName })


    const matchPokemons = allPokemons
      .filter(poke => poke.name.startsWith(pokemonName))
      .map(poke => ({ name: poke.name, url: `https://pokeapi.co/api/v2/pokemon/${poke.name}` }))
    if (matchPokemons.length == allPokemons.length) {
      return set({ matchPokemons: [] })
    }

    set({ matchPokemons })
  },

  updateGender: async (genderNumber: number | null) => {
    set({ genderIsLoading: true })

    try {
      const res = await fetchGender(genderNumber)

      if (res) {
        set({ genderIsLoading: false })
      }

      set({ pokemonsFilterGender: res })
    } catch (error) {
      console.log(error);
    }
  },
}))