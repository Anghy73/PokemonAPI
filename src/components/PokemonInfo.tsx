import { Link, useParams } from "react-router"

import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { useEffect, useState } from "react";
import { PokemonDetails, PokemonSpecies } from "../types";
import { FaArrowLeft, FaHeart } from "react-icons/fa";

import imgLoad from '../assets/img/nofound.png'
import { defineType } from "../utilities/defineType";
import { ListTypesCard } from "./ListTypesCard";
import { CardPokemon } from "./CardPokemon";
import { useFavPokemonsStore } from "../store/useFavPokemonsStore";
import { fecthPokemon } from "../services/fecthPokemons";
import { toast, Toaster } from "sonner";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

const options = {
  elements: {
    line: {
      borderWidth: 2,
    },
  },

  plugins: {
    legend: {
      labels: {
        color: 'white',
        font: {
          size: 20
        }
      },
    },
  },

  scales: {
    r: {
      angleLines: {
        color: 'rgba(255, 255, 255, 0.3)',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.3)',
      },
      ticks: {
        color: '#777',
        backdropColor: 'rgba(255, 255, 255, 0)',
        font: {
          size: 15,
        }
      },
      pointLabels: {
        color: '#fff',
        font: {
          size: 15
        }
      }
    },
  },
};

function PokemonInfo() {

  const [showShiny, setShowShiny] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const { pokeId } = useParams()
  const [pokeInfo, setPokeInfo] = useState<PokemonDetails>()
  const [pokeSpecie, setPokeSpecie] = useState<PokemonSpecies>()
  const pokemonsFav = useFavPokemonsStore(state => state.pokemonsFav)
  const addPokeFav = useFavPokemonsStore(state => state.addPokeFav)
  const id = Number(pokeId)

  useEffect(() => {
    fecthPokemon(id)
      .then(res => setPokeInfo(res))
  }, [pokeId])

  useEffect(() => {
    fetch(`${pokeInfo?.species.url}`)
      .then(async res => await res.json())
      .then(res => setPokeSpecie(res))
  }, [pokeInfo, pokeId])

  const selectTab = (index: number) => {
    setActiveTab(index)
  }

  const statsLabels = pokeInfo?.stats.map(stat => stat.stat.name) ?? []
  const statsData = pokeInfo?.stats.map(stat => stat.base_stat) ?? []
  const typePokemon = pokeInfo?.types[0].type.name
  const pokeName = pokeInfo?.name !== undefined ? (pokeInfo?.name?.charAt(0).toUpperCase() + pokeInfo?.name?.slice(1)) : ''

  const data = {
    labels: statsLabels,
    datasets: [
      {
        label: pokeName,
        data: statsData,
        backgroundColor: `${defineType({ type: typePokemon }).color}33`,
        borderColor: `${defineType({ type: typePokemon }).color}`,
      },
    ],
  };

  const backImg = pokeInfo?.sprites.back_default ?? false
  const pokeID = `#${pokeInfo?.id.toString().padStart(3, '0')}`
  const text1 = pokeSpecie?.flavor_text_entries[0]?.flavor_text == undefined ? '' : pokeSpecie?.flavor_text_entries[0].flavor_text
  const text2 = pokeSpecie?.flavor_text_entries[2]?.flavor_text == undefined ? '' : pokeSpecie?.flavor_text_entries[2].flavor_text
  const isFav = pokemonsFav.find(poke => poke.name == pokeInfo?.name)


  const handleShowShiny = () => {
    setShowShiny(!showShiny)
  }

  const handleFavPoke = () => {
    if (!pokeInfo?.name) {
      // toast('Pokemon name is undefined');
      return;
    }

    const pokemon = {
      url: `https://pokeapi.co/api/v2/pokemon/${pokeInfo.id}`,
      name: pokeInfo.name
    };

    if (isFav) {
      toast('Pokemon eliminated');
      return addPokeFav(pokemon);
    }

    toast('Add to fav');
    addPokeFav(pokemon);
  }


  return (
    <div className="w-screen min-h-screen flex flex-col lg:flex-row justify-center pt-30 md:pt-15 px-5">
      <Toaster></Toaster>
      <Link to='/'>
        <div className="absolute top-10 left-10 text-2xl text-[#484848] hover:text-[#a8a8a8] cursor-pointer border-2 border-[#484848] hover:border-[#a8a8a8] p-2 rounded-full">
          <FaArrowLeft />
        </div>
      </Link>

      <div className="flex flex-col gap-5 justify-center items-center w-full h-full pt-10">
        <div className="flex flex-col gap-5">
          <span className="text-4xl w-full max-w-[300px]">{pokeName}</span>
          <span className="text-2xl rounded-full w-full max-w-[300px] py-1 px-4 border-2 border-[#282828] cursor-pointer hover:border-amber-400">{pokeID}</span>
        </div>
        <div style={backImg ? {} : { pointerEvents: 'none' }} className="cardContainer">
          <div className="cardContent">
            <div className="cardFront">
              {
                showShiny ?
                  <img className="animate-[pulse_800ms] [animation-iteration-count:2]" src={pokeInfo?.sprites.front_shiny !== null ? pokeInfo?.sprites.front_shiny : imgLoad} />
                  :
                  <img src={pokeInfo?.sprites.front_default !== null ? pokeInfo?.sprites.front_default : imgLoad} alt={`image of the pokemon ${pokeInfo?.name}`} />
              }
            </div>
            <div className="cardBack">
              {
                showShiny ?
                  <img className="animate-[pulse_800ms] [animation-iteration-count:2]" src={pokeInfo?.sprites.back_shiny} alt="" />
                  :
                  <img src={pokeInfo?.sprites.back_default} alt={`image of the pokemon ${pokeInfo?.name}`} />
              }
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 w-full">
          <button onClick={handleShowShiny} style={showShiny ? { borderColor: '#ffb900', color: '#ffb900' } : {}} className="w-full max-w-[300px] flex justify-center items-center  bg-[#282828] border-2 border-[#282828] p-2 py-3 rounded-md hover:border-amber-600 cursor-pointer shadow-lg hover:text-amber-600 text-white font-semibold hover:text-amber-400-500">Show Shiny</button>
          <button onClick={handleFavPoke} style={{color: isFav ? '#fb2c36' : '', borderColor: isFav ? '#fb2c36' : ''}} className="flex justify-center items-center p-2 rounded-lg h-13 w-15 cursor-pointer border-2 border-[#383838] text-xl text-[#383838] hover:text-red-500 hover:border-red-500"><FaHeart></FaHeart></button>
        </div>
      </div>


      {/* about - stats -  */}
      <div className="flex flex-col items-center w-full py-10 lg:py-0">
        <ul className="grid grid-cols-4 w-full max-w-[600px] justify-items-stretch items-start">
          <li style={activeTab == 0 ? { borderBottomColor: '#ffb900' } : {}} className="flex justify-center items-center p-2 px-4 h-15 border-b-2 border-b-transparent cursor-pointer font-bold" onClick={() => selectTab(0)}>Details</li>
          <li style={activeTab == 1 ? { borderBottomColor: '#ffb900' } : {}} className="flex justify-center items-center p-2 px-4 h-15 border-b-2 border-b-transparent cursor-pointer font-bold" onClick={() => selectTab(1)}>Stats</li>
          <li style={activeTab == 2 ? { borderBottomColor: '#ffb900' } : {}} className="flex justify-center items-center p-2 px-4 h-15 border-b-2 border-b-transparent cursor-pointer font-bold" onClick={() => selectTab(2)}>Forms</li>
          <li style={activeTab == 3 ? { borderBottomColor: '#ffb900' } : {}} className="flex justify-center items-center p-2 px-4 h-15 border-b-2 border-b-transparent cursor-pointer font-bold" onClick={() => selectTab(3)}>Skills</li>
        </ul>

        <div className="w-full min-w-[280px] max-w-[600px]">
          {activeTab == 0 ?
            <div className="flex flex-col w-full gap-10 mt-10">
              <div className="flex flex-wrap justify-around items-center gap-8 lg:px-20 md:px-10">
                <div className="flex flex-col text-xl">
                  <span className="font-bold text-2xl text-amber-400">{pokeInfo?.height}</span>
                  <span className="text-[#585858] font-semibold">Height</span>
                </div>
                <div className="flex flex-col text-xl">
                  <span className="font-bold text-2xl text-amber-400">{pokeInfo?.weight}</span>
                  <span className="text-[#585858] font-semibold">Weight</span>
                </div>
                <div className="flex flex-col text-xl">
                  <span className="font-bold text-2xl text-amber-400">{pokeInfo?.base_experience}</span>
                  <span className="text-[#585858] font-semibold">EXP Base</span>
                </div>
                <div className="flex flex-col text-xl">
                  <span className="font-bold text-2xl text-amber-400">{pokeSpecie?.base_happiness}</span>
                  <span className="text-[#585858] font-semibold">Happiness Base</span>
                </div>
                <div className="flex flex-col text-xl">
                  <span className="font-bold text-2xl text-amber-400">{pokeSpecie?.capture_rate}</span>
                  <span className="text-[#585858] font-semibold">Capture Rate</span>
                </div>
              </div>

              <div className="flex flex-col w-full gap-4 justify-center items-start text-amber-400 text-lg text-start">
                <h4 className="text-2xl font-semibold text-white">Characteristics</h4>
                <p className="pr-5">{text1}</p>
                <p className="pr-5">{text2}</p>
              </div>

              <div className="flex flex-col items-start gap-6">
                <p className="text-2xl font-semibold">Type</p>
                <div className="flex">
                  <ListTypesCard arrTypes={pokeInfo?.types}></ListTypesCard>
                </div>
              </div>
            </div> : null}
          {activeTab == 1 ? <div className="flex justify-center items-center m-auto mt-10 max-w-[500px]"><Radar options={options} data={data} ></Radar></div> : null}


          {activeTab == 2 ?
            <div className="w-full max-w-[600px] flex mt-10 overflow-auto gap-5">
              {
                pokeSpecie?.varieties.map(variant => (
                  <div key={variant.pokemon.name} className="min-w-[300px] pt-20">
                    <CardPokemon pokemonURL={variant.pokemon.url} name={variant.pokemon.name}></CardPokemon>
                  </div>
                ))
              }
            </div>
            : null}


          {activeTab == 3 ?
            <div className="flex flex-col gap-5 pt-8">
              <div className="flex flex-col items-start gap-3">
                <h3 className="font-semibold text-xl text-amber-400">Abilities</h3>
                <div>
                  {
                    pokeInfo?.abilities.map(abi => (
                      <div key={abi.slot} className="flex gap-2 text-lg pl-8">
                        <p>Slot {abi.slot}:</p>
                        <span className="font-bold">{abi.ability?.name}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <h3 className="font-semibold text-xl text-amber-400">Moves</h3>
                <div className="flex flex-wrap max-h-80 overflow-auto">
                  {
                    pokeInfo?.moves.map(mov => (
                      <div key={mov.move.name} className="flex gap-2 text-lg pl-8">
                        <span className="font-bold">{mov.move.name}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            : null}
        </div>
      </div>
    </div>
  )
}

export default PokemonInfo