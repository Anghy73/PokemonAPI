import { defineType } from "../hooks/DefineType"
import { Type } from "../types";

interface Props {
  arrTypes: Type[] | undefined
}

export const ListTypesCard = ({ arrTypes }: Props) => {
  console.log(arrTypes);

  if (typeof(arrTypes) === 'undefined') {return 'no se encontraron types'}
  
  return (
    <div className='flex justify-center items-center flex-wrap gap-3'>
      {
        arrTypes.map(type => (
          <div key={type.type.name} style={{ boxShadow: `0 4px 30px ${defineType({ type: type.type.name }).color}4f, 0 0 10px ${defineType({ type: type.type.name }).color}3f inset`, color: `${defineType({ type: type.type.name }).color}`, borderColor: `${defineType({ type: type.type.name }).color}`, flex: '1 1 0' }} className='flex justify-center items-center gap-2 bg-transparent px-2 py-0.5 rounded-md border-2 max-w-fit'>
            {defineType({ type: type.type.name, w: '15px', h: '15px' }).typeIcon}
            <p>{type.type.name}</p>
          </div>
        ))
      }
    </div>
  )
}