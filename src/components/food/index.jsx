import {useEffect, useState} from 'react';
import {breakfasts, burgers, additionals, drinks} from '../../firebase/firebase.js';

export const Breakfast = () => {
  const [breakfast, setBreakfast] = useState([])
  useEffect(() => {
    async function getBreakfast() {
      const data = await breakfasts();
      setBreakfast(data);
    }
    getBreakfast()
  }, [])
  return (
    <CardFood data={breakfast} />
  )
}

export const Burger = () => {
  const [burger, setBurger] = useState([])
  useEffect (()=> {
    async function getBurger() {
      const data = await burgers()
      setBurger(data)
    }
    getBurger()
  }, [])
  return (
    <CardFood data={burger}/>
  )
}

export const Additional = () => {
  const [additional, setAdditional] = useState([])
  useEffect (()=> {
    async function getAdditional() {
      const data = await additionals()
      setAdditional(data)
    }
    getAdditional()
  }, [])
  return (
    <CardFood data={additional}/>
  )
}

export const Drinks = () => {
  const [drink, setDrink] = useState([])
  useEffect (()=> {
    async function getDrink() {
      const data = await drinks()
      setDrink(data)
    }
    getDrink()
  }, [])
  return (
    <CardFood data={drink}/>
  )
}

export const CardFood = ({data}) => {
  return data.map((food) => {
    return (
      <div className="w-64 h-[360px] mx-auto rounded overflow-hidden bg-blue-50 shadow-lg" key={food.id}>
        <img className="w-2/4 h-2/4 mx-auto mt-2" src={`/src/assets/img/${food.id}.png`} alt={food.id} />
        <div className="px-6 py-4 mx-auto">
          <div className="font-starJedi text-xl mb-2 text-center">{food.item}</div>
        </div>
        <div className="flex flex-col mx-auto">
          <p
            className="mx-auto mb-6 w-12 bg-gray-200 rounded-full text-center align-middle text-md font-semibold text-gray-700 mb-1">
            {food.price}$
          </p>
          <button className="mx-auto rounded-full bg-black text-white font-starJedi p-2">Agregar</button>
        </div>
      </div>
    )
  })
}



