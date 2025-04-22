import { ListGenderFilter } from "./ListGenderFilter"
import { ListTypesFilter } from "./ListTypesFilter"
import { PokemonNameFilter } from "./PokemonNameFilter"

export const Filters = () => {
  return (
    <>
      <div className='flex flex-col gap-5 xl:flex-row mt-30 w-full lg:flex-row'>
        <ListTypesFilter></ListTypesFilter>
        <ListGenderFilter></ListGenderFilter>
        <PokemonNameFilter></PokemonNameFilter>
      </div>
    </>
  )
}