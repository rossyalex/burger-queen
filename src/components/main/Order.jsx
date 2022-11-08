import { Link, useNavigate } from 'react-router-dom';
import {auth, logout} from '../../firebase/firebase.js';
import {useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Additional, Breakfast, Burger, Drinks} from '../food';

export const Order = () => {
  const navigate = useNavigate();
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
      <h2 className="text-2xl text-white text-center">Menú</h2>
      <div className="mx-auto w-[600px] bg-blue-600 bg-opacity-50 border border-transparent rounded">
        <button
          className="mx-4 w-1/8 border-transparent inline-block rounded-full bg-red-700 text-white text-2xl font-bold p-2 my-4">
          Desayuno
        </button>
        <button
          className="mx-4 w-1/8 border rounded-full bg-white text-2xl font-bold p-1 my-4">
          Burger
        </button>
        <button
          className="mx-4 w-1/8 border rounded-full bg-white text-2xl font-bold p-1 my-4">
          Adicionales
        </button>
        <button
          className="mx-4 w-1/8 border rounded-full bg-white text-2xl font-bold p-1 my-4">
          Bebidas
        </button>
        <div className="mx-4">
          <Breakfast />
          {/*<Burger className="hidden"/>*/}
          {/*<Additional className="hidden"/>*/}
          {/*<Drinks className="hidden"/>*/}
        </div>
      </div>
      <h2 className="text-2xl text-white text-center">Pedido</h2>
      <div className="mx-auto bg-blue-600 bg-opacity-50 border border-transparent rounded">
        <h4>Cliente: </h4>
        <h4>Nº Orden: </h4>
        <button type="button" id="subtraction" className="button-operation"> -</button>
        <button type="button" id="quantity" className="button-operation"> 1</button>
        <button type="button" id="addition" className="button-operation"> +</button>
        <i className="fa-regular fa-trash"></i>
        <h3>Total: </h3>
      </div>

      <Link to="/kitchen"
            className="mx-auto w-3/5 border rounded bg-amber-500 text-2xl font-bold p-2 my-4">
        Enviar a Cocina
      </Link>
      <Link to="/home"
            className="mx-auto w-3/5 border rounded bg-amber-500 text-2xl font-bold p-2 my-4">
        Volver al Home
      </Link>

    </>
  )

}
