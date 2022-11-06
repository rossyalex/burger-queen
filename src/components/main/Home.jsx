import { Link, useNavigate } from 'react-router-dom';
import {auth, logout} from '../../firebase/firebase.js';
import {useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';

export const Home = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
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
      <Link to="/order"
        className="mx-auto w-3/5 border rounded bg-amber-500 text-2xl font-bold p-2 my-4">
        Crear Pedido
      </Link>
      <Link to="/kitchen"
            className="mx-auto w-3/5 border rounded bg-amber-500 text-2xl font-bold p-2 my-4">
        Cocina
      </Link>
      <Link to="/withdraw"
            className="mx-auto w-3/5 border rounded bg-amber-500 text-2xl font-bold p-2 my-4">
        Retirar
      </Link>
      <button onClick={ logoutAction }
            className="mx-auto w-3/5 border rounded bg-amber-500 text-2xl font-bold p-2 my-4">
        Cerrar Sesión
      </button>

    </>
  )

}


