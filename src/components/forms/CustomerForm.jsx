import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import {ListFood} from '../food/index.jsx';

export const CustomerForm = ({food, updateFood, total, updateTotal}) => {
  const [name, setName] = useState('')
  const [table, setTable] = useState('')
  const createClient = () => {
    const client = {
      name,
      table,
    }
    localStorage.setItem('client', JSON.stringify(client))
  }
  return (
    <>
      <h2 className="text-2xl text-white text-center font-starJedi tracking-widest">Pedido</h2>
        <div className="mx-auto w-[600px] bg-blue-600 bg-opacity-50 border border-transparent rounded">
          <div className="mx-auto flex flex-row">
            <input
              onChange={ (e) => setName(e.target.value)}
              value={name}
              className="mx-auto bg-white text-black border rounded w-54 h-6 p-2 my-4 tracking-widest font-starJedi"
              type="text"
              placeholder="Cliente"/>
            <input
              onChange={(e) => setTable(e.target.value)}
              value={table}
              className="mx-auto bg-white text-black border rounded w-36 h-6 p-2 my-4 tracking-widest font-starJedi"
              type="text"
              placeholder="Nº Mesa "/>
            <button
              onClick={createClient}
              className="mx-auto w-24 h-6 rounded bg-amber-500 text-center font-starJedi tracking-widest my-4">
              Crear
            </button>
          </div>
          { food.length > 0 ? <FoodOrder foods={food} updateFood={updateFood} total={total} updateTotal={updateTotal} /> : ''}
          <h3 className="mx-auto text-2xl text-white tracking-widest font-starJedi p-4">Total: { total }</h3>
        </div>
    </>
  )
}

export const FoodOrder = ({foods, updateFood, total, updateTotal}) => {
  return foods.map((food) => {
    return (
      <ListFood key={food.id} food={food} updateFood={updateFood} total={total} updateTotal={updateTotal}/>
    )
  })
}
