import { Link, useNavigate } from 'react-router-dom';
import {auth, logout} from '../../firebase/firebase.js';
import {useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';

export const Withdraw = () => {
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
      <h2>Retirar</h2>
      <div className="mx-auto bg-blue-600 bg-opacity-50 border border-transparent rounded">
        <h6>Cliente: </h6>
        <h6>Nº Orden: </h6>
        <h6>Hora: </h6>
        <Link to="/Withdraw"
            className="mx-auto w-3/5 border rounded bg-amber-500 text-2xl font-bold p-2 my-4">
        Entregado
        </Link>
        <Link to="/home"
            className="mx-auto w-3/5 border rounded bg-amber-500 text-2xl font-bold p-2 my-4">
        Volver al Home
        </Link>
      </div>


    </>
  )

}
