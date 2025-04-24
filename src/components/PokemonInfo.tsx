import { useParams } from "react-router"

import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { useEffect } from "react";

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
  const { pokeId } = useParams()
  console.log(pokeId);

  // useEffect(() => {
  //   fetch()
  // }, [])


  const stats: Array<string> = ['HP', 'Speed', 'Attack']

  const data = {
    // labels: ['HP', 'Speed', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    labels: stats,
    datasets: [
      {
        label: 'Pokemon',
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };


  return (
    <>
      <div style={{ fontSize: '20px' }} >PokemonInfo</div>
      <div className="flex justify-center items-center m-auto mt-20">
        <Radar options={options} data={data} ></Radar>
      </div>
    </>
  )
}

export default PokemonInfo