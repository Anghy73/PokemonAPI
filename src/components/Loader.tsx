import imgLoad from '../assets/img/nofound.png'

export const Loader = () => {
  return (
    <div className='m-auto mt-20 w-40 h-40'>
      <img className=' w-full h-full object-cover animate-spin' src={imgLoad} alt="" />
    </div>
  )
}