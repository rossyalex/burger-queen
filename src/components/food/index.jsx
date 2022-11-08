import coffee from '../../assets/cafe.png'
import coffeeAmerican from '../../assets/cafe-americano.png'
import coffeeMilk from '../../assets/cafe-leche.png'
import sandwich from '../../assets/sanw.png'
import juice from '../../assets/jugo-jedi.png'

export const Breakfast = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 mb-4 mx-auto">
        <div className="w-64 h-[420px] mx-auto rounded overflow-hidden bg-blue-50 shadow-lg">
          <img className="w-3/5 h-3/5 mx-auto" src={coffeeAmerican} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 uppercase">Café Americano</div>
          </div>
          <div className="flex flex-col mx-auto">
            <p
              className="mx-auto mb-6 w-12 bg-gray-200 rounded-full text-center align-middle text-md font-semibold text-gray-700 mb-1">
              5$
            </p>
            <button className="mx-auto rounded-full bg-black text-white p-2 uppercase">Agregar</button>
          </div>
        </div>
        <div className="w-64 h-[420px] mx-auto rounded overflow-hidden bg-blue-50 shadow-lg">
          <img className="w-3/5 h-3/5 mx-auto" src={coffeeMilk} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 uppercase">Café con Leche</div>
          </div>
          <div className="flex flex-col mx-auto">
            <p
              className="mx-auto mb-6 w-12 bg-gray-200 rounded-full text-center align-middle text-md font-semibold text-gray-700 mb-1">
              7$
            </p>
            <button className="mx-auto rounded-full bg-black text-white p-2 uppercase">Agregar</button>
          </div>
        </div>
        <div className="w-64 h-[420px] mx-auto rounded overflow-hidden bg-blue-50 shadow-lg">
          <img className="w-3/5 h-3/5 mx-auto" src={sandwich} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 uppercase">Sandwich</div>
          </div>
          <div className="flex flex-col mx-auto">
            <p
              className="mx-auto mb-6 w-12 bg-gray-200 rounded-full text-center align-middle text-md font-semibold text-gray-700 mb-1">
              10$
            </p>
            <button className="mx-auto rounded-full bg-black text-white p-2 uppercase">Agregar</button>
          </div>
        </div>
        <div className="w-64 h-[420px] mx-auto rounded overflow-hidden bg-blue-50 shadow-lg">
          <img className="w-3/5 h-3/5 mx-auto" src={juice} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 uppercase">Jugos Naturales</div>
          </div>
          <div className="flex flex-col mx-auto">
            <p
              className="mx-auto mb-6 w-12 bg-gray-200 rounded-full text-center align-middle text-md font-semibold text-gray-700 mb-1">
              7$
            </p>
            <button className="mx-auto rounded-full bg-black text-white p-2 uppercase">Agregar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export const Burger = () => {
  return (
    <>
      <button
        className="mx-auto w-3/2 border rounded bg-blue text-2xl font-bold p-5 my-4">
        <img src={cafe} alt="burger-pollo" className="w-[100px] mx-auto"/>
        Burger Pollo 10$
      </button>
      <button
        className="mx-auto w-3/2 border rounded bg-blue text-2xl font-bold p-5 my-4">
        <img src={cafe} alt="burger-pollo-doble" className="w-[100px] mx-auto"/>
        Burger Doble de Pollo 15$
      </button>
      <button
        className="mx-auto w-3/2 border rounded bg-blue text-2xl font-bold p-5 my-4">
        <img src={cafe} alt="burger-carne" className="w-[100px] mx-auto"/>
        Burger Carne 10$
      </button>
      <button
        className="mx-auto w-3/2 border rounded bg-blue text-2xl font-bold p-5 my-4">
        <img src={cafe} alt="burger-carne-doble" className="w-[100px] mx-auto"/>
        Burger Doble de Carne 15$
      </button>
    </>
  )
}

export const Additional = () => {
  return (
    <>
      <button
        className="mx-auto w-3/2 border rounded bg-blue text-2xl font-bold p-5 my-4">
        <img src={cafe} alt="papas" className="w-[100px] mx-auto"/>
        Papas fritas 5$
      </button>
      <button
        className="mx-auto w-3/2 border rounded bg-blue text-2xl font-bold p-5 my-4">
        <img src={cafe} alt="aros-cebolla" className="w-[100px] mx-auto"/>
        Aros de Cebolla 5$
      </button>
      <button
        className="mx-auto w-3/2 border rounded bg-blue text-2xl font-bold p-5 my-4">
        <img src={cafe} alt="queso" className="w-[100px] mx-auto"/>
        Queso 1$
      </button>
      <button
        className="mx-auto w-3/2 border rounded bg-blue text-2xl font-bold p-5 my-4">
        <img src={cafe} alt="huevo" className="w-[100px] mx-auto"/>
        Huevo 1$
      </button>
    </>
  )
}

export const Drinks = () => {
  return (
    <>
      <button
        className="mx-auto w-3/2 border rounded bg-blue text-2xl font-bold p-5 my-4">
        <img src={cafe} alt="agua-500ml" className="w-[100px] mx-auto"/>
        Agua 500ml 5$
      </button>
      <button
        className="mx-auto w-3/2 border rounded bg-blue text-2xl font-bold p-5 my-4">
        <img src={cafe} alt="agua-700ml" className="w-[100px] mx-auto"/>
        Agua 700ml 7$
      </button>
      <button
        className="mx-auto w-3/2 border rounded bg-blue text-2xl font-bold p-5 my-4">
        <img src={cafe} alt="bebida/gaseosa-500ml" className="w-[100px] mx-auto"/>
        Bebida/gaseosa 500ml 7$
      </button>
      <button
        className="mx-auto w-3/2 border rounded bg-blue text-2xl font-bold p-5 my-4">
        <img src={cafe} alt="bebida/gaseosa-750ml" className="w-[100px] mx-auto"/>
        Bebida/gaseosa 750ml 10$
      </button>
    </>
  )
}



