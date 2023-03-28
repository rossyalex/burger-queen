import { Link, useNavigate } from 'react-router-dom';
import {auth, logout} from '../../firebase/firebase.js';
import {useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';

export const Home = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  localStorage.setItem('food', JSON.stringify([]))
  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/")
  }, [user, loading]);
  const logoutAction = () => {
    logout();
    localStorage.removeItem("user");
  }

  return(
    <>
      <div className="mx-auto flex flex-col">
        <Link to="/order"
              className="mx-auto w-3/6 rounded-full bg-amber-500 text-2xl text-center font-starJedi p-1 my-4">
          Crear Pedido
        </Link>
        <Link to="/kitchen"
              className="mx-auto w-3/6 rounded-full bg-amber-500 text-2xl text-center font-starJedi p-1 my-4">
          Cocina
        </Link>
        <Link to="/withdraw"
              className="mx-auto w-3/6 rounded-full bg-amber-500 text-2xl text-center font-starJedi p-1 my-4">
          Retirar
        </Link>
        <button onClick={ logoutAction }
                className="mx-auto w-3/6 rounded-full bg-amber-500 text-2xl font-starJedi p-1 my-4">
          Cerrar Sesión
        </button>
      </div>
    </>
  )

}


