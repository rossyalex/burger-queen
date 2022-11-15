
import burger from '../../assets/img/h.png'

export const Init = ({ view: Component }) => {
  return (
    <div className="p-4 mx-auto w-[600px]">
      <div className="mt-20">
        <img src={burger} alt="burger" className="w-[400px] mx-auto"/>
      </div>
      <div className="mt-10">
        <h1 className="text-center text-amber-500 font-soloist3D text-6xl">
          Burger
        </h1>
        <h1 className="text-center text-amber-500 font-soloist3D text-6xl">
          Wars
        </h1>
      </div>
      <div className="mt-20 mx-auto">
        <Component/>
      </div>
    </div>
  );
}
