import { ListTypesFilter } from "./ListTypesFilter"
import { PokemonNameFilter } from "./PokemonNameFilter"

export const Filters = () => {
  return (
    <>
      <div className='flex flex-wrap justify-between items-center gap-30 mt-30 w-full'>
        <ListTypesFilter></ListTypesFilter>
        <PokemonNameFilter></PokemonNameFilter>
      </div>
    </>
  )
}