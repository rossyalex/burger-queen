
import burger from '../../assets/h.png'

export const Init = ({ view: Component }) => {
  return (
    <div className="p-4 mx-auto w-[600px]">
      <div className="mt-20">
        <img src={burger} alt="burger" className="w-[400px] mx-auto"/>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-white font-bold text-5xl">
          Burger
        </h1>
        <h1 className="text-center text-white font-bold text-5xl">
          Wars
        </h1>
      </div>
      <div className="mt-20">
        <Component/>
      </div>
    </div>
  );
}
