import { Link, useParams } from "react-router"

import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { useEffect, useState } from "react";
import { PokemonDetails } from "../types";
import { FaArrowLeft, FaHeart } from "react-icons/fa";

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
        color: 'white',
        backdropColor: 'rgba(255, 255, 255, 00)',
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

  const { pokeId } = useParams()
  const [pokeInfo, setPokeInfo] = useState<PokemonDetails>()


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
      .then(async res => await res.json())
      .then(res => setPokeInfo(res))
  }, [])

  // console.log(pokeId);
  console.log(pokeInfo);

  const statsLabels = pokeInfo?.stats.map(stat => stat.stat.name) ?? []
  const statsData = pokeInfo?.stats.map(stat => stat.base_stat) ?? []
  // console.log(statsData);


  // const stats: Array<string> = ['HP', 'Speed', 'Attack']

  const data = {
    labels: statsLabels,
    datasets: [
      {
        label: 'Pokemon', //pokemon name
        data: statsData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const backImg = pokeInfo?.sprites.back_default ?? false
  const pokeID = `#${pokeInfo?.id.toString().padStart(3, '0')}`


  const handleShowShiny = () => {
    setShowShiny(!showShiny)
  }


  return (
    <div className="w-screen h-screen flex">
      <Link to='/'>
        <div className="absolute top-10 left-10 text-2xl text-[#484848] hover:text-[#a8a8a8] cursor-pointer border-2 border-[#484848] hover:border-[#a8a8a8] p-2 rounded-full">
          <FaArrowLeft />
        </div>
      </Link>


      {/* img del pokemon ver adelante y atras, #0id, button de agregar a me gusta, abajo button de isShiny y mostrar su forma Shiny */}
      <div className="flex flex-col gap-5 justify-center items-center w-full h-full">
        <span className="text-2xl rounded-full w-full max-w-[300px] py-1 px-4 border-2 border-[#282828] cursor-pointer hover:border-amber-400">{pokeID}</span>
        <div style={backImg ? {} : { pointerEvents: 'none' }} className="cardContainer">
          <div className="cardContent">
            <div className="cardFront">
              {
                showShiny ?
                  <img className="animate-[pulse_800ms] [animation-iteration-count:2]" src={pokeInfo?.sprites.front_shiny} alt="" />
                  :
                  <img src={pokeInfo?.sprites.front_default} alt={`image of the pokemon ${pokeInfo?.name}`} />
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
          <button className="flex justify-center items-center p-2 rounded-lg h-full w-15 cursor-pointer border-2 border-[#383838] text-xl text-[#383838] hover:text-red-500 hover:border-red-500"><FaHeart></FaHeart></button>
        </div>
      </div>


      {/* about - stats -  */}
      <div className="w-full">
        <div className="flex justify-center items-center m-auto mt-20 max-w-[500px]">
          <Radar options={options} data={data} ></Radar>
        </div>
      </div>
    </div>
  )
}

export default PokemonInfo