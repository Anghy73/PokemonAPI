// import { useState } from "react";

// export const useFilterName = ({ pokemonName }: { pokemonName: string }) => {
//   const [allPokemons, setAllPokemons] = useState([])

//   let matchPokemon = allPokemons.filter(poke => poke.name.startsWith(pokemonName))

//   if (matchPokemon.length == allPokemons.length) { matchPokemon = [] }

//   // console.log(matchPokemon);

//   return {
//     allPokemons,
//     isLoading,
//     matchPokemon
//   }
// }