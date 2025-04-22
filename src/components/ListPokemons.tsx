import { PokemonsResults, PokemonsResultsTypes } from "../types";
import { CardPokemon } from "./CardPokemon"

interface Props {
  pokemons: (PokemonsResults | PokemonsResultsTypes | undefined)[]
}

export const ListPokemons = ({ pokemons }: Props) => {
  return (
    <>
      <h3 className="text-4xl font-bold mt-30 mb-40">List of Pokemons</h3>
      <div className="flex justify-center items-center gap-8 w-full h-full mt-30 flex-wrap gap-y-20">
        {
          pokemons.map(pokemon => {
            if (!pokemon) return null

            const pokeKey = 'pokemon' in pokemon 
              ? pokemon.pokemon.name 
              : 'pokemon_species' in pokemon && typeof pokemon.pokemon_species === 'object' && pokemon.pokemon_species !== null 
              ? (pokemon.pokemon_species as { name: string }).name 
              : pokemon.name
            const pokeURL = 'pokemon' in pokemon 
              ? pokemon.pokemon.url 
              : 'pokemon_species' in pokemon && typeof pokemon.pokemon_species === 'object' && pokemon.pokemon_species !== null 
              ? (pokemon.pokemon_species as { url: string }).url 
              : pokemon.url
            return (
              <CardPokemon key={pokeKey} pokemonURL={pokeURL} name={pokeKey}></CardPokemon>
            )
          }
          )
        }
      </div>
    </>
  )
}