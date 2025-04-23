import { ListTypesCard } from "./ListTypesCard"
import { Logo } from "./Logo"

import venusaurIMG from '../assets/img/venusaur.png'
import { Species, Type } from "../types"

interface PokeMainInfo {
  name: string,
  colorbg1: string
  colorbg2: string
  type: Type[],
  info: string,
  id: number
  img: string
}

export const MainPokemonInfo = ({ arrMainPokemons }: { arrMainPokemons: PokeMainInfo[] }) => {
  console.log(arrMainPokemons);

  return (
    <>
      {
        arrMainPokemons.map(poke => (
          // <div className='flex flex-col justify-start items-center gap-25 bg-gradient-to-bl h-full from-emerald-600 to-emerald-900 pt-10'>
          // <div className='flex flex-col justify-start items-center gap-25 bg-gradient-to-bl h-full pt-10'>
          <div className="absolute w-screen bg-amber-200">
            <div className='flex flex-col justify-start items-center gap-25 bg-gradient-to-bl h-full pt-10'>
              <Logo></Logo>
              <div className='flex w-full justify-between items-center px-20'>
                <div className='w-full max-w-3xl flex flex-col gap-10 items-start px-20'>
                  <h2 className='font-bold text-4xl'>{poke.name}</h2>
                  <ListTypesCard arrTypes={poke.type}></ListTypesCard>
                  <p className='w-full max-w-3xl text-xl font-semibold text-start'>{poke.info}</p>
                  <button style={{ transition: 'all 200ms ease-in-out' }} className="w-full bg-[#282828] border-2 border-[#282828] py-3 rounded-md hover:border-emerald-400 cursor-pointer shadow-lg hover:text-emerald-400 font-semibold">More Info</button>
                </div>
                <div className='w-full flex justify-center items-center'>
                  <img className='w-full max-w-[450px] drop-shadow-[0_20px_20px_rgb(0_0_0/0.6)]' src={poke.img} alt="" />
                </div>
              </div>
            </div>
          </div>

        ))
      }
    </>

    // <div className='flex flex-col justify-start items-center gap-25 bg-gradient-to-bl h-full from-emerald-600 to-emerald-900 pt-10'>
    //   <Logo></Logo>
    //   <div className='flex w-full justify-between items-center px-20'>
    //     <div className='w-full max-w-3xl flex flex-col gap-10 items-start px-20'>
    //       <h2 className='font-bold text-4xl'>Name Pokemon</h2>
    //       <ListTypesCard arrTypes={[{
    //         slot: 1,
    //         type: {
    //           name: 'grass',
    //           url: 'dick',
    //         },
    //       }]}></ListTypesCard>
    //       <p className='w-full max-w-3xl text-xl font-semibold text-start'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet expedita, sapiente exercitationem consequatur mollitia molestiae ea sunt eaque unde consectetur quidem ratione? Eveniet aliquam placeat ipsa nulla consectetur aliquid. Natus?
    //         Nemo excepturi repellendus eius, praesentium velit voluptate nesciunt repudiandae ex. Ad accusantium nisi aliquid, perferendis ducimus, beatae laboriosam aliquam ratione obcaecati, saepe explicabo cumque unde quidem id magnam officia minus!</p>
    //       <button style={{ transition: 'all 200ms ease-in-out' }} className="w-full bg-[#282828] border-2 border-[#282828] py-3 rounded-md hover:border-emerald-400 cursor-pointer shadow-lg hover:text-emerald-400 font-semibold">More Info</button>
    //     </div>
    //     <div className='w-full flex justify-center items-center'>
    //       <img className='w-full max-w-[450px] drop-shadow-[0_20px_20px_rgb(0_0_0/0.6)]' src={venusaurIMG} alt="" />
    //     </div>
    //   </div>
    // </div>
  )
}