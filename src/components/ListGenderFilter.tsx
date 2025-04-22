import { FaGenderless } from "react-icons/fa6";
import { IoIosFemale, IoIosMale } from "react-icons/io"
import { usePokemonsStore } from "../store/usePokemons";
import { defineGender } from "../utilities/defineGender";

export const ListGenderFilter = () => {
  const gender = usePokemonsStore(state => state.gender)
  const setGender = usePokemonsStore(state => state.setGender)
  const updateGender = usePokemonsStore(state => state.updateGender)
  
  const handleGender = async (genderName: string) => {

    if (genderName == gender) {
      return setGender('')
    }

    setGender(genderName)
    const genderNumber = defineGender(genderName)
    updateGender(genderNumber)
  }
  let genderStyle = {}

  switch (gender) {
    case 'male':
      genderStyle = { boxShadow: '0 0 10px #007595', color: '#007595', borderColor: '#007595' }
      break;
    case 'female':
      genderStyle = { boxShadow: '0 0 10px #c6005c', color: '#c6005c', borderColor: '#c6005c' }
      break;
    case 'genderless':
      genderStyle = { boxShadow: '0 0 10px #ffb900', color: '#ffb900', borderColor: '#ffb900' }
      break;
  
    default:
      genderStyle = {}
      break;
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <h3 className="font-semibold text-2xl pl-4">Gender</h3>

      <div className="flex gap-4">
        <div onClick={() => handleGender('male')} style={gender == 'male' ? genderStyle : {}} className="flex justify-center items-center border-2 border-[#282828] rounded-2xl w-18 h-18 cursor-pointer hover:border-cyan-700 hover:text-cyan-700 text-2xl"><IoIosMale></IoIosMale></div>
        <div onClick={() => handleGender('female')} style={gender == 'female' ? genderStyle : {}} className="flex justify-center items-center border-2 border-[#282828] rounded-2xl w-18 h-18 cursor-pointer hover:border-pink-700 hover:text-pink-700 text-2xl"><IoIosFemale></IoIosFemale></div>
        <div onClick={() => handleGender('genderless')} style={gender == 'genderless' ? genderStyle : {}} className="flex justify-center items-center border-2 border-[#282828] rounded-2xl w-18 h-18 cursor-pointer hover:border-amber-400 hover:text-amber-400 text-2xl"><FaGenderless /></div>
      </div>
    </div>
  )
}