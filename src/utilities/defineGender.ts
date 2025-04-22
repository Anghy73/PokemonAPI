export const defineGender = (gender: string) => {
  let genderNumber = null
  switch (gender) {
    case 'female':
      genderNumber = 1
      break;
    case 'male':
      genderNumber = 2
      break;
    case 'genderless':
      genderNumber = 3
      break;
    default:
      genderNumber = null
      break;
  }

  return genderNumber
}