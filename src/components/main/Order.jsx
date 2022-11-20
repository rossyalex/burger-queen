import { Link, useNavigate } from 'react-router-dom';
import {auth, logout} from '../../firebase/firebase.js';
import React, {useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Additional, Breakfast, Burger, Drinks, ListFood} from '../food';
import {CustomerForm} from '../forms/CustomerForm';

export const Order = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState('breakfast');
  const [user, loading, error] = useAuthState(auth);
  const [food, setFood] = useState([])
  const [total, setTotal] = useState(0)
  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) navigate("home")
  // }, [user, loading]);
  // const logoutAction = () => {
  //   logout();
  //   localStorage.removeItem("user");
  // }
  const getTotal = () => {
    let totalFood = 0;
    const foodParse = JSON.parse(localStorage.getItem('food'))
    foodParse.forEach(item => totalFood += (item.quantity * item.price))
    setTotal(totalFood)
  }
  useEffect(() => {
    function getLocalfood () {
      const foodParse = JSON.parse(localStorage.getItem('food'))
      setFood(foodParse || []);
    }
    getLocalfood()
    getTotal()
  }, [])

  return(
    <>
      <h2 className="text-2xl text-white text-center font-starJedi tracking-widest">Menú</h2>
      <div className="mx-auto w-[600px] bg-blue-600 bg-opacity-50 border border-transparent rounded">
        <button
          onClick={() => setMenu('breakfast')}
          className={`${menu === 'breakfast' ? 'bg-red-700 text-white': 'bg-white'} mx-4 w-1/8 border-transparent inline-block rounded-full font-starJedi p-2 my-4`}>
          Desayuno
        </button>
        <button
          onClick={() => setMenu('burger')}
          className={`${menu === 'burger' ? 'bg-red-700 text-white': 'bg-white'} mx-4 w-1/8 border-transparent inline-block rounded-full bg-white font-starJedi p-2 my-4`}>
          Burger
        </button>
        <button
          onClick={() => setMenu('additional')}
          className={`${menu === 'additional' ? 'bg-red-700 text-white': 'bg-white'} mx-4 w-1/8 border-transparent inline-block rounded-full bg-white font-starJedi p-2 my-4`}>
          Adicionales
        </button>
        <button
          onClick={() => setMenu('drinks')}
          className={`${menu === 'drinks' ? 'bg-red-700 text-white': 'bg-white'} mx-4 w-1/8 border-transparent inline-block rounded-full bg-white font-starJedi p-2 my-4`}>
          Bebidas
        </button>
        <div className="mx-4">
          <div className="flex flex-wrap gap-4 mb-4 mx-auto">
            {menu === 'breakfast' ? <Breakfast updateFood={setFood} updateTotal={setTotal} /> : ''}
            {menu === 'burger' ? <Burger updateFood={setFood} updateTotal={setTotal}/> : ''}
            {menu === 'additional' ? <Additional updateFood={setFood} updateTotal={setTotal}/> : ''}
            {menu === 'drinks' ? <Drinks updateFood={setFood} updateTotal={setTotal}/> : ''}
          </div>
        </div>
      </div>
      <CustomerForm food={food} updateFood={setFood} total={total} updateTotal={setTotal}/>
      <div className="mx-auto flex flex-col">
        <Link to="/kitchen"
              className="mx-auto w-3/8 rounded-full bg-amber-500 text-2xl text-center font-starJedi p-3 my-4">
          Enviar a Cocina
        </Link>
        <Link to="/home"
              className="mx-auto  w-3/8 rounded-full bg-amber-500 text-2xl text-center font-starJedi p-3 my-4">
          volver al Home
        </Link>
      </div>
    </>
  )

}
