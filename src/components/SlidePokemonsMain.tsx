import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'

import { Type } from '../types'
import { MainPokemonInfo } from './MainPokemonInfo'

// imd - imp - imn

interface PokeMainInfo {
  name: string,
  colorbg1: string
  colorbg2: string
  type: Type[],
  info: string,
  id: number
  img: string
}

function SlidePokemonsMain({ arrMainPokemons }: { arrMainPokemons: PokeMainInfo[] }) {
  return (
    <Swiper
      className='h-full'
      spaceBetween={0}
      allowTouchMove={false}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true
      }}
      loop={true}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
    >
      {
        arrMainPokemons.map(poke => (
          <SwiperSlide>
            <MainPokemonInfo pokeMainInfo={poke}></MainPokemonInfo>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default SlidePokemonsMain