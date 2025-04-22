export const defineTypeNumber = (type: string) => {
  let typeNumber: number = 0

  switch (type) {
    case 'normal':
      typeNumber = 1
      break;
    case 'fighting':
      typeNumber = 2
      break;
    case 'fire':
      typeNumber = 10
      break;
    case 'water':
      typeNumber = 11
      break;
    case 'electric':
      typeNumber = 13
      break;
    case 'grass':
      typeNumber = 12
      break;
    case 'ice':
      typeNumber = 15
      break;
    case 'poison':
      typeNumber = 4
      break;
    case 'ground':
      typeNumber = 5
      break;
    case 'flying':
      typeNumber = 3
      break;
    case 'psychic':
      typeNumber = 14
      break;
    case 'bug':
      typeNumber = 7
      break;
    case 'rock':
      typeNumber = 6
      break;
    case 'ghost':
      typeNumber = 8
      break;
    case 'dragon':
      typeNumber = 16
      break;
    case 'dark':
      typeNumber = 17
      break;
    case 'steel':
      typeNumber = 9
      break;
    case 'fairy':
      typeNumber = 18
      break;
    case 'stellar':
      typeNumber = 19
      break;
    default:
      typeNumber = 19
      break;
  }

  return typeNumber
}