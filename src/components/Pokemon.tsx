import { useEffect, useState } from "react"

export const Pokemon = ({ pokemon }) => {
  const [pokemonD, setPokemonD] = useState([])

  useEffect(() => {
    fetch(pokemon.url)
      .then(async res => await res.json())
      .then(res => setPokemonD(res))
      .catch(err => console.log(err))
  }, [])

  console.log(pokemonD);
  
  
  return (
    <div>
      <img src={pokemonD.sprites.front_default} alt="" />
      <span>{pokemonD.id}</span>
      <h3>{pokemonD.name}</h3>
    </div>
  )
}