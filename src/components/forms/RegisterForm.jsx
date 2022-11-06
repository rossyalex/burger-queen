import React, {useState, useEffect} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {Link, useNavigate} from 'react-router-dom';
import {registerWithEmailAndPassword, auth} from '../../firebase/firebase.js';
import {useAuthState} from "react-firebase-hooks/auth";


export const RegisterForm = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home")
  }, [user, loading]);
  const registerAction = () => registerWithEmailAndPassword(name, email, password)
  return(
    <div className="mx-auto bg-blue-600 bg-opacity-50 border border-transparent rounded">
      <input
        className="mx-auto bg-white text-black border rounded w-3/5 h-12 p-2 my-4"
        type="text"
        placeholder="Nombre"
        onChange={(e) => setName(e.target.value)}
        value={name}/>
      <input
        className="mx-auto bg-white text-black border rounded w-3/5 h-12 p-2 my-4"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}/>
      <input
        className="mx-auto bg-white text-black border rounded w-3/5 h-12 p-2 my-4"
        type="password"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
        value={password}/>
      <button
        className="mx-auto w-3/5 border rounded bg-amber-500 text-2xl font-bold p-2 my-4"
        onClick={ registerAction }>
        Registro
      </button>
    </div>
    );
}
