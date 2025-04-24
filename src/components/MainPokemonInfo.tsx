import { Type } from "../types"
import { ListTypesCard } from "./ListTypesCard"
import { Logo } from "./Logo"

interface PokeMainInfo {
  name: string,
  colorbg1: string
  colorbg2: string
  type: Type[],
  info: string,
  id: number
  img: string
}

export const MainPokemonInfo = ({ pokeMainInfo: poke }: { pokeMainInfo: PokeMainInfo }) => {
  return (
    <>
      <div style={{ backgroundColor: poke.colorbg1, background: `linear-gradient(210deg,${poke.colorbg1} 0%, ${poke.colorbg2} 100%)` }} className={'h-fit pb-10'}>
        <div className='flex flex-col justify-start items-center h-full pt-10 md:px-5 lg:px-10 xl:px-30'>
          <Logo></Logo>
          <div className='flex flex-col-reverse md:flex-row w-full justify-between items-center px-10 mt-10'>
            <div className='w-full max-w-3xl md:max-w-xl flex flex-col gap-5 items-start justify-start mt-8'>
              <h2 className='font-bold text-4xl md:text-5xl'>{poke.name}</h2>
              <div className="text-md md:text-xl p-2">
                <ListTypesCard arrTypes={poke.type}></ListTypesCard>
              </div>
              <p className='w-full max-w-3xl text-md md:text-lg font-medium text-start'>{poke.info}</p>
              <button style={{ transition: 'all 200ms ease-in-out' }} className='w-full bg-[#282828] border-2 border-[#282828] py-3 rounded-md hover:border-amber-500 cursor-pointer shadow-lg hover:text-amber-500 font-semibold'>More Info</button>
            </div>
            <div className='w-full flex justify-center items-center'>
              <img className='w-full max-w-[450px] drop-shadow-[0_20px_20px_rgb(0_0_0/0.6)]' src={poke.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}