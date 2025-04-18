import { PokemonsResults, PokemonsResultsTypes } from "../types";
import { CardPokemon } from "./CardPokemon"

interface Props {
  pokemons: (PokemonsResults| PokemonsResultsTypes)[]
}

export const ListPokemons = ({ pokemons }: Props) => {
  return (
    <>
      <h3 className="text-4xl font-bold mt-30 mb-40">Lista de pokemones</h3>
      <div className="flex justify-center items-center gap-8 w-full h-full mt-30 flex-wrap gap-y-20">
        {
          pokemons.map(pokemon => {
            const pokeKey = 'pokemon' in pokemon ? pokemon.pokemon.name : pokemon.name
            const pokeURL = 'pokemon' in pokemon ? pokemon.pokemon.url : pokemon.url

            return (
              <CardPokemon key={pokeKey} pokemonURL={pokeURL}></CardPokemon>
            )
          }
          )
        }
      </div>
    </>
  )
}