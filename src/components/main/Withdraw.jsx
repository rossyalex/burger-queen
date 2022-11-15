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
      <h2 className="mx-4 w-1/8 border-transparent inline-block rounded-full bg-white text-black text-2xl font-starJedi p-2 my-4">Retirar</h2>

      <div className="mx-auto w-[600px] bg-blue-600 bg-opacity-50 border border-transparent rounded">
        <h6 className="text-1xl text-amber-500 font-starJedi tracking-widest">Cliente: </h6>
        <h6 className="text-1xl text-amber-500 font-starJedi tracking-widest">Nº orden: </h6>
        <h6 className="text-1xl text-amber-500 font-starJedi tracking-widest">Hora: </h6>
        <Link to="/Withdraw"
              className="mx-4 w-1/8 rounded-full bg-amber-500 text-2xl font-starJedi p-1 my-4">
        Entregado
        </Link>
      </div>
        <Link to="/home"
            className="mx-auto  w-3/8 rounded-full bg-amber-500 text-2xl text-center font-starJedi p-2 my-4">
        volver al Home
        </Link>



    </>
  )

}
