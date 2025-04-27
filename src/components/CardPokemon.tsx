import { useEffect, useState } from "react"

import { FaHeart, FaInfo } from 'react-icons/fa'

import { PokemonDetails } from "../types"

import { defineType } from '../utilities/defineType'
import { ListTypesCard } from "./ListTypesCard"

import imgLoad from '../assets/img/nofound.png'
import { Link } from "react-router"
import { useFavPokemonsStore } from "../store/useFavPokemonsStore"

export const CardPokemon = ({ pokemonURL, name }: { pokemonURL: string, name?: string }) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>()
  const addPokeFav = useFavPokemonsStore(state => state.addPokeFav)
  const pokemonsFav = useFavPokemonsStore(state => state.pokemonsFav)

  if (pokemonURL.includes('pokemon-species')) {
    const pokeURLSplip = pokemonURL.split('/')
    pokeURLSplip[5] = 'pokemon'
    pokeURLSplip[6] = name ?? ''
    pokemonURL = pokeURLSplip.join('/')
  }

  useEffect(() => {
    fetch(pokemonURL)
      .then(async res => await res.json())
      .then(json => setPokemonDetails(json))
      .catch(e => console.log(e))
  }, [])

  const type = pokemonDetails?.types[0].type.name
  const pokeName = pokemonDetails?.name !== undefined ? (pokemonDetails?.name?.charAt(0).toUpperCase() + pokemonDetails?.name?.slice(1)) : ''
  const pokeID = `#${pokemonDetails?.id.toString().padStart(3, '0')}`
  const isFav = pokemonsFav.find(poke => poke.name == name)

  const handleFavPoke = () => {
    const pokemon = {
      url: pokemonURL,
      name: name ?? ''
    }
    addPokeFav(pokemon)
  }

  return (
    <div className="cardPoke w-full max-w-[350px] flex flex-col items-center bg-[#151515] rounded-3xl px-5 py-10 pt-40 relative cursor-pointer">
      <figure className="w-full absolute top-12 flex justify-center items-center">
        <div style={{ boxShadow: `0px 4px 30px ${defineType({ type }).color}88, 0px 0 50px ${defineType({ type }).color}1a inset`, }} className="glowPoke w-[190px] h-[190px] rounded-full overflow-hidden cursor-pointer absolute z-0"></div>
        <img className="glowPokeImg absolute z-10" src={pokemonDetails?.sprites.front_default !== null ? pokemonDetails?.sprites.front_default : imgLoad} alt={`image of the pokemon ${pokemonDetails?.name}`} />
      </figure>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2 justify-center items-center font-bold pt-3">
          <span style={{ backgroundColor: `${defineType({ type }).color}15`, border: `1px solid ${defineType({ type })}44` }} className="px-2 py-0.5 rounded-xl font-semibold">{pokeID}</span>
          <h3 className="text-2xl">{pokeName}</h3>
        </div>
        <ListTypesCard arrTypes={pokemonDetails?.types}></ListTypesCard>
        <div className="w-full flex justify-center items-center gap-5 px-5">
          <Link to={`/pokemon/${pokemonDetails?.id}`} className="w-full">
            <button style={{ transition: 'all 200ms ease-in-out' }} className="flex justify-center items-center w-full bg-transparent border-2 border-[#282828] p-2 py-3 rounded-md hover:border-blue-500 cursor-pointer shadow-lg hover:shadow-blue-900 text-[#595959] hover:text-blue-500"><FaInfo></FaInfo></button>
          </Link>
          <button onClick={handleFavPoke} style={{ transition: 'all 200ms ease-in-out', color: isFav ? '#fb2c36' : '', borderColor: isFav ? '#fb2c36' : '' }} className="w-full flex justify-center items-center  bg-transparent border-2 border-[#282828] p-2 py-3 rounded-md hover:border-red-500 cursor-pointer shadow-lg hover:shadow-red-900 text-[#595959] hover:text-red-500"><FaHeart></FaHeart></button>
        </div>
      </div>
    </div>
  )
}