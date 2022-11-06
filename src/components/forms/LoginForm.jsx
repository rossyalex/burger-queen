import React, { useEffect, useState }  from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../firebase/firebase.js';
import { useAuthState } from "react-firebase-hooks/auth";


export const LoginForm = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home")
  }, [user, loading]);
  const loginAction = async () => {
    try {
      const loginEmailPassword = await signInWithEmailAndPassword( auth, email, password);
      const { user: {accessToken} } = loginEmailPassword;
      localStorage.setItem('user', accessToken);
    } catch (e) {
      console.log('error', e);
    }
    };

  return (
    <div className="mx-auto bg-blue-600 bg-opacity-50 border border-transparent rounded">
        <input
          className="mx-auto bg-white text-black border rounded w-3/5 h-12 p-2 my-4"
          type="email"
          placeholder="Email"
          onChange={ (e) => setEmail(e.target.value)}
          value={email}/>
        <input
          className="mx-auto bg-white text-black border rounded w-3/5 h-12 p-2 my-4"
          type="password"
          placeholder="Contraseña"
          onChange={ (e) => setPassword(e.target.value)}
          value={password}/>
        <button
          className="mx-auto w-3/5 border rounded bg-amber-500 text-2xl font-bold p-2 my-4"
          type="submit"
          onClick={ loginAction }>
          Entrar
        </button>
        <div>
          ¿No tienes cuenta? <Link to="/register">Register</Link>
        </div>
    </div>
  );
}
