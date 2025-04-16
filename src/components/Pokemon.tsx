import { useEffect, useState } from "react"
import { PokemonDetails } from "../types";

interface Props {
  pokemonURL: string
}

export const Pokemon = ({ pokemonURL }: Props) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>()

  useEffect(() => {
    fetch(pokemonURL)
      .then(async res => await res.json())
      .then(res => setPokemonDetails(res))
      .catch(err => console.log(err))
  }, [])  
  
  return (
    <div>
      <img src={pokemonDetails?.sprites.front_default} alt="" />
      <span>{pokemonDetails?.id}</span>
      <h3>{pokemonDetails?.name}</h3>
      <p className="bg-[#ff0080]"></p>
    </div>
  )
}