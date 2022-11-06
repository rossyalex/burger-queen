import {Init} from '../components/layout/Init';
import {RegisterForm} from '../components/forms/RegisterForm';
import {LoginForm} from '../components/forms/LoginForm.jsx';
import {Home as HomeView} from '../components/main/Home.jsx';


export const Login = () => {
  return(
    <Init view={LoginForm}/>
  )
}

export const Register = () => {
  return (
    <Init view={RegisterForm} />
  )
}

export const Home = () => {
  return (
    <Init view={HomeView} />
  )
}

export const Order = () => <h3>Order Burger</h3>

export const Kitchen = () => <h3>Kitchen Burger</h3>

export const Withdraw = () => <h3>Withdraw Burger</h3>
