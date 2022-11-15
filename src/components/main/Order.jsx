import { Link, useNavigate } from 'react-router-dom';
import {auth, logout} from '../../firebase/firebase.js';
import React, {useEffect, useState} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Additional, Breakfast, Burger, Drinks} from '../food';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Order = () => {
  const navigate = useNavigate();
  const [food, setFood] = useState('breakfast');
  const [user, loading, error] = useAuthState(auth);
  // useEffect(() => {
  //   if (loading) return;
  //   if (!user) navigate("home")
  // }, [user, loading]);
  // const logoutAction = () => {
  //   logout();
  //   localStorage.removeItem("user");
  // }

  return(
    <>
      <h2 className="text-2xl text-white text-center font-starJedi tracking-widest">Menú</h2>
      <div className="mx-auto w-[600px] bg-blue-600 bg-opacity-50 border border-transparent rounded">
        <button
          onClick={() => setFood('breakfast')}
          className={`${food === 'breakfast' ? 'bg-red-700 text-white': 'bg-white'} mx-4 w-1/8 border-transparent inline-block rounded-full font-starJedi p-2 my-4`}>
          Desayuno
        </button>
        <button
          onClick={() => setFood('burger')}
          className={`${food === 'burger' ? 'bg-red-700 text-white': 'bg-white'} mx-4 w-1/8 border-transparent inline-block rounded-full bg-white font-starJedi p-2 my-4`}>
          Burger
        </button>
        <button
          onClick={() => setFood('additional')}
          className={`${food === 'additional' ? 'bg-red-700 text-white': 'bg-white'} mx-4 w-1/8 border-transparent inline-block rounded-full bg-white font-starJedi p-2 my-4`}>
          Adicionales
        </button>
        <button
          onClick={() => setFood('drinks')}
          className={`${food === 'drinks' ? 'bg-red-700 text-white': 'bg-white'} mx-4 w-1/8 border-transparent inline-block rounded-full bg-white font-starJedi p-2 my-4`}>
          Bebidas
        </button>
        <div className="mx-4">
          <div className="flex flex-wrap gap-4 mb-4 mx-auto">
            {food === 'breakfast' ? <Breakfast /> : ''}
            {food === 'burger' ? <Burger/> : ''}
            {food === 'additional' ? <Additional/> : ''}
            {food === 'drinks' ? <Drinks/> : ''}
          </div>
        </div>
      </div>
      <h2 className="text-2xl text-white text-center font-starJedi tracking-widest">Pedido</h2>
      <div className="mx-auto w-[600px] bg-blue-600 bg-opacity-50 border border-transparent rounded">
        <h4 className="text-white tracking-widest font-starJedi">Cliente: </h4>
        <input
          className="mx-auto bg-white text-black border rounded w-3/5 h-12 p-2 my-4 tracking-widest font-starJedi"
          type="text"
          placeholder="Cliente"/>
        <h4 className="text-white tracking-widest font-starJedi">Nº orden: </h4>
        <input
          className="mx-auto bg-white text-black border rounded w-3/5 h-12 p-2 my-4 tracking-widest font-starJedi"
          type="number"
          placeholder="Nº orden:"/>
        <button type="button" id="subtraction" className="mx-2 w-1/8 rounded-full bg-white text-2xl font-bold p-1 my-2"> - </button>
        <button type="button" id="quantity" className="mx-2 w-1/8 rounded-full bg-white text-xl font-bold p-1 my-2"> 1 </button>
        <button type="button" id="addition" className="mx-2 w-1/8 rounded-full bg-white text-2xl font-bold p-1 my-2"> + </button>
        <FontAwesomeIcon icon={faTrash} />
        <h3 className="text-2xl text-white tracking-widest font-starJedi">Total: </h3>
      </div>

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
