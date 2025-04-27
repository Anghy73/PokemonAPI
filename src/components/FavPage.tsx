import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router"
import { ListPokemons } from "./ListPokemons"
import { useFavPokemonsStore } from "../store/useFavPokemonsStore"

function FavPage() {
  const pokemonsFav = useFavPokemonsStore(state => state.pokemonsFav)

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Link to='/'>
        <div className="absolute top-10 left-10 text-2xl text-[#484848] hover:text-amber-400 cursor-pointer border-2 border-[#484848] hover:border-amber-400 p-2 rounded-full">
          <FaArrowLeft />
        </div>
      </Link>
      <div className="w-full max-w-7xl">
        <ListPokemons pokemons={pokemonsFav} title="List of favorites Pokemons"></ListPokemons>
      </div>
    </div>
  )
}

export default FavPage