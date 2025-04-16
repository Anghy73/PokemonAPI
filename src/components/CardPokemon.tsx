import { useEffect, useState } from "react"
import { PokemonDetails } from "../types"

import { Bug, Dark, Dragon, Electric, Fairy, Fighting, Fire, Flying, Ghost, Grass, Ground, Ice, Normal, Poison, Psychic, Rock, Steel, Water } from '../assets/type-icons/TypeIcons'




export const CardPokemon = ({ pokemonURL }: { pokemonURL: string }) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>()

  useEffect(() => {
    fetch(pokemonURL)
      .then(async res => await res.json())
      .then(json => setPokemonDetails(json))
      .catch(e => console.log(e))
  }, [])


  console.log(pokemonDetails);

  interface DefineType {
    type: string | undefined,
    w?: string
    h?: string
  }

  const defineType = ({ type, w, h }: DefineType) => {
    type ColorHex = `#${string}`

    let color: ColorHex = '#000'
    let typeIcon

    switch (type) {
      case 'normal':
        color = '#A8A77A';
        // color = '#fffb00';
        typeIcon = <Normal width={w} height={h} color={color} />;
        break;
      case 'fire':
        // color = '#F08030';
        color = '#ff6a00';
        typeIcon = <Fire width={w} height={h} color={color} />;
        break;
      case 'water':
        // color = '#6390F0';
        color = '#0051ff';
        typeIcon = <Water width={w} height={h} color={color} />;
        break;
      case 'electric':
        // color = '#F8D030';
        color = '#ffcc00';
        typeIcon = <Electric width={w} height={h} color={color} />;
        break;
      case 'grass':
        // color = '#7AC74C';
        color = '#5eff00';
        typeIcon = <Grass width={w} height={h} color={color} />;
        break;
      case 'ice':
        // color = '#96D9D6';
        color = '#00fff2';
        typeIcon = <Ice width={w} height={h} color={color} />;
        break;
      case 'fighting':
        // color = '#C22E28';
        // color = '#da322c';
        // color = '#ff3a33';
        color = '#ff0800';
        typeIcon = <Fighting width={w} height={h} color={color} />;
        break;
      case 'poison':
        // color = '#A33EA1';
        color = '#ff00fb';
        typeIcon = <Poison width={w} height={h} color={color} />;
        break;
      case 'ground':
        // color = '#E2BF65';
        // color = '#9f7f31';
        color = '#b79336';
        // color = '#ffb700';
        typeIcon = <Ground width={w} height={h} color={color} />;
        break;
      case 'flying':
        color = '#A98FF3';
        // color = '#4400ff';
        typeIcon = <Flying width={w} height={h} color={color} />;
        break;
      case 'psychic':
        // color = '#F95587';
        color = '#ff004c';
        typeIcon = <Psychic width={w} height={h} color={color} />;
        break;
      case 'bug':
        // color = '#A6B91A';
        color = '#e1ff00';
        typeIcon = <Bug width={w} height={h} color={color} />;
        break;
      case 'rock':
        // color = '#B6A136';
        // color = '#ffe14b';
        // color = '#d8bf40';
        color = '#ffd500';
        typeIcon = <Rock width={w} height={h} color={color} />;
        break;
      case 'ghost':
        // color = '#735797';
        color = '#8b67ba';
        // color = '#6f00ff';
        typeIcon = <Ghost width={w} height={h} color={color} />;
        break;
      case 'dragon':
        color = '#6F35FC';
        // color = '#5a18ff';
        // color = '#4800ff';
        typeIcon = <Dragon width={w} height={h} color={color} />;
        break;
      case 'dark':
        // color = '#705746';
        color = '#ad886f';
        // color = '#ff6600';
        typeIcon = <Dark width={w} height={h} color={color} />;
        break;
      case 'steel':
        color = '#B7B7CE';
        typeIcon = <Steel width={w} height={h} color={color} />;
        break;
      case 'fairy':
        // color = '#ff5dae';
        color = '#ff0080';
        typeIcon = <Fairy width={w} height={h} color={color} />;
        break;
      default:
        color = '#777';           // Color por defecto
        // typeIcon = <Unknown />;   // Icono por defecto si no matchea
        break;
    }


    // switch (type) {
    //   case 'normal':
    //     color = '#fff'
    //     break;
    //   case 'fighting':
    //     color = '#C22E28'
    //     break;
    //   case 'grass':
    //     // color = '#00ff0d1a'
    //     color = '#00ff0d'
    //     typeIcon = <Bug />
    //     break;
    //   case 'fire':
    //     color = '#ffd900'
    //     break;
    //   case 'water':
    //     // color = '#00fffb25'
    //     color = '#00fffb'
    //     break;

    //   default:
    //     break;
    // }

    return { color, typeIcon }
  }

  // console.log(defineType('water').typeIcon);
  // console.log(pokemonDetails?.types);


  const type = pokemonDetails?.types[0].type.name
  const pokeID = `#${pokemonDetails?.id.toString().padStart(3, '0')}`

  return (
    <div className="cardPoke w-full max-w-[350px] flex flex-col items-center bg-[#151515] rounded-3xl px-5 py-10 pt-40 relative cursor-pointer">
      <figure className="w-full absolute top-12 flex justify-center items-center">
        <div style={{ boxShadow: `0px 4px 30px ${defineType({ type }).color}88, 0px 0 50px ${defineType({ type }).color}1a inset`, }} className="glowPoke w-[190px] h-[190px] rounded-full overflow-hidden cursor-pointer absolute z-0"></div>
        <img className="glowPokeImg absolute z-10" src={pokemonDetails?.sprites.front_default} alt={`image of the pokemon ${pokemonDetails?.name}`} />
      </figure>

      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2 justify-center items-center font-bold pt-3">
          <span style={{ backgroundColor: `${defineType({ type }).color}15`, border: `1px solid ${defineType({ type })}44` }} className="px-2 py-0.5 rounded-xl font-semibold">{pokeID}</span>
          <h3 className="text-2xl">{pokemonDetails?.name}</h3>
        </div>
        <div className='flex justify-center items-center flex-wrap gap-3'>
          {
            pokemonDetails?.types.map(type => (
              <div key={type.type.name} style={{ boxShadow: `0 4px 30px ${defineType({ type: type.type.name }).color}4f, 0 0 10px ${defineType({ type: type.type.name }).color}3f inset`, color: `${defineType({ type: type.type.name }).color}`, borderColor: `${defineType({ type: type.type.name }).color}`, flex: '1 1 0' }} className='flex justify-center items-center gap-2 bg-transparent px-2 py-0.5 rounded-md border-2 max-w-fit'>
                {defineType({ type: type.type.name, w: '15px', h: '15px' }).typeIcon}
                <p>{type.type.name}</p>
              </div>
            ))
          }
        </div>
        <div className="w-full flex justify-center items-center gap-5 px-5">
          <button style={{ transition: 'all 200ms ease-in-out' }} className="w-full bg-transparent border-2 border-[#282828] p-2 rounded-md hover:border-blue-600 cursor-pointer shadow-lg hover:shadow-blue-900">More Info</button>
          <button style={{ transition: 'all 200ms ease-in-out' }} className="w-full bg-transparent border-2 border-[#282828] p-2 rounded-md hover:border-red-500 cursor-pointer shadow-lg hover:shadow-red-900">❤️</button>
        </div>
      </div>
    </div>
  )
}