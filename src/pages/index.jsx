import {Init} from '../components/layout/Init';
import {RegisterForm} from '../components/forms/RegisterForm';
import {LoginForm} from '../components/forms/LoginForm.jsx';
import {Home as HomeView} from '../components/main/Home.jsx';
import {Order as OrderView} from '../components/main/Order.jsx';
import {Kitchen as KitchenView} from '../components/main/Kitchen.jsx';
import {Withdraw as WithdrawView} from '../components/main/Withdraw.jsx';


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

export const Order = () => {
  return (
   <OrderView/>
  )
}

export const Kitchen = () => {
  return (
    <KitchenView/>
  )
}

export const Withdraw = () =>{
  return (
    <WithdrawView/>
  )
}
