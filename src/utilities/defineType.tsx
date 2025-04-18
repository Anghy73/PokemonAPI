import { Bug, Dark, Dragon, Electric, Fairy, Fighting, Fire, Flying, Ghost, Grass, Ground, Ice, Normal, Poison, Psychic, Rock, Steel, Stellar, Unknown, Water } from '../assets/type-icons/TypeIcons'


interface DefineType {
  type: string | undefined,
  w?: string
  h?: string
}

export const defineType = ({ type, w, h }: DefineType) => {
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
    case 'stellar':
      color = '#FFFFFF';
      typeIcon = <Stellar width={w} height={h} color={color} />;
      break;
    default:
      color = '#000000';
      // typeIcon = <Stellar width={w} height={h} color={color} />;
      typeIcon = <Unknown width={w} height={h} color={color}/>;
      break;
  }

  return { color, typeIcon }
}