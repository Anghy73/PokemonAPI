export const CardPokemon = () => {
  return (
    <div className="cardPoke flex flex-col items-center bg-[#151515] rounded-3xl px-10 py-10 pt-40 relative">
      <figure className="w-full absolute top-12 flex justify-center items-center">
        <div className="glowPoke w-[190px] h-[190px] rounded-full overflow-hidden cursor-pointer absolute z-0"></div>
        {/* <img className="glowPokeImg absolute z-10" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="" /> */}
        <img className="glowPokeImg absolute z-10" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" />
      </figure>
      <div className="">
        <div>
          <h3>Venusaur</h3>
          <span>#003</span>
        </div>
        <div>
          tags / types
        </div>
        <div>
          <button>more info</button>
          <button>add fav</button>
        </div>
      </div>
    </div>
  )
}