import React, {useEffect, useState} from 'react';
import {breakfasts, burgers, additionals, drinks} from '../../firebase/firebase.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export const Breakfast = ({updateFood, updateTotal}) => {
  const [breakfast, setBreakfast] = useState([])
  useEffect(() => {
    async function getBreakfast() {
      const data = await breakfasts();
      setBreakfast(data);
    }
    getBreakfast()
  }, [])
  return (
    <CardFood data={breakfast} updateFood={updateFood} updateTotal={updateTotal}/>
  )
}

export const Burger = ({updateFood, updateTotal}) => {
  const [burger, setBurger] = useState([])
  useEffect (()=> {
    async function getBurger() {
      const data = await burgers()
      setBurger(data)
    }
    getBurger()
  }, [])
  return (
    <CardFood data={burger} updateFood={updateFood} updateTotal={updateTotal}/>
  )
}

export const Additional = ({updateFood, updateTotal}) => {
  const [additional, setAdditional] = useState([])
  useEffect (()=> {
    async function getAdditional() {
      const data = await additionals()
      setAdditional(data)
    }
    getAdditional()
  }, [])
  return (
    <CardFood data={additional} updateFood={updateFood} updateTotal={updateTotal}/>
  )
}

export const Drinks = ({updateFood, updateTotal}) => {
  const [drink, setDrink] = useState([])
  useEffect (()=> {
    async function getDrink() {
      const data = await drinks()
      setDrink(data)
    }
    getDrink()
  }, [])
  return (
    <CardFood data={drink} updateFood={updateFood} updateTotal={updateTotal}/>
  )
}

export const CardFood = ({data, updateFood, updateTotal}) => {
  const addFood = (foodCard) => {
    const food = JSON.parse(localStorage.getItem('food'));
    food.push({...foodCard, quantity: 1})
    updateFood(food)
    let totalPrice = 0
    food.forEach((item) => totalPrice += (item.price * item.quantity))
    updateTotal(totalPrice)
    localStorage.setItem('food', JSON.stringify(food))
  }
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
          <button
            onClick={() => addFood(food)}
            className="mx-auto rounded-full bg-black text-white font-starJedi p-2">
            Agregar
          </button>
        </div>
      </div>
    )
  })
}

export const ButtonFood = ({food, updateFood, total, updateTotal}) => {

  /**
   * Funcion para la resta de comida solo si la cantidad es mayor a 1
   */
  const sub = () => {
    if (food.quantity > 1) {
      const foodData = JSON.parse(localStorage.getItem('food'));
      food.quantity--
      foodData.map((item) => {
        if (item.id === food.id) {
          return item.quantity--
        }
      })
      updateFood(foodData)
      let totalPrice = 0
      foodData.forEach((item) => totalPrice += (item.price * item.quantity))
      updateTotal(totalPrice)
      localStorage.setItem('food', JSON.stringify(foodData))
    }
  }

  /**
   * Función para la suma de comida
   */
  const add = () => {
    const foodData = JSON.parse(localStorage.getItem('food'));
    food.quantity++
    foodData.map((item) => {
      if (item.id === food.id) {
        return item.quantity++
      }
    })
    updateFood(foodData)
    let totalPrice = 0
    foodData.forEach((item) => totalPrice += (item.price * item.quantity))
    updateTotal(totalPrice)
    localStorage.setItem('food', JSON.stringify(foodData))
  }

  return(
    <>
      <button onClick={ () => sub() } type="button" id="subtraction" className="mx-2 w-6 h-8 rounded bg-white font-bold p-1 my-2"> - </button>
      <button type="button" id="quantity" className="mx-2 w-6 h-8 rounded bg-white font-bold p-1 my-2"> { food.quantity } </button>
      <button onClick={ () => add() } type="button" id="addition" className="mx-2 w-6 h-8 rounded bg-white font-bold p-1 my-2"> + </button>
    </>
  )
}

export const DeleteFood = ({food, updateFood, updateTotal}) => {
  const deleteItem = () => {
    const foodData = JSON.parse(localStorage.getItem('food'));
    const foodFilter = foodData.filter((item) => food.id !== item.id)
    updateFood(foodFilter)
    let totalPrice = 0
    foodFilter.forEach((item) => totalPrice += (item.price * item.quantity))
    updateTotal(totalPrice)
    localStorage.setItem('food', JSON.stringify(foodFilter))
  }
  return(
    <>
      <button onClick={ () => deleteItem()} className="mx-2 mx-2 rounded bg-white p-1 my-2">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </>
  )
}

export const ListFood = ({food, updateFood,  total, updateTotal}) => {
  return(
    <>
      <div className="mx-auto flex flex-row">
        <ButtonFood food={food} updateFood={updateFood} total={total} updateTotal={updateTotal}/>
        <p className="my-2 text-white font-starJedi">{ food.item }</p>
        <DeleteFood food={food} updateFood={updateFood} updateTotal={updateTotal} />
      </div>
    </>
  )
}


