import { PokemonsResults } from "../types";
import { CardPokemon } from "./CardPokemon"

interface Props {
  pokemons: PokemonsResults[]
}

export const ListPokemons = ({ pokemons }: Props) => {
  console.log(pokemons);

  return (
    <>
      <h4>Lista de pokemones</h4>
      <div className="flex justify-center items-center gap-8 w-full h-full mt-30 flex-wrap gap-y-20">
        {
          pokemons.map(pokemon => (
            <CardPokemon key={pokemon.name} pokemonURL={pokemon.url}></CardPokemon>
          ))
        }
      </div>
    </>
  )
}