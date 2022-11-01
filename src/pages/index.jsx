export const Login = () => {
  return(
    <div>
      <form
        onSubmit={ ev => {
          ev.preventDefault();
          console.log(ev.target.search.value);

        }}
      >
        <label>Email</label>
        <input type={ 'email' }/>
        <label>password</label>
        <input type={ 'password' }/>
        <button type={ 'submit' }>Login</button>
      </form>
    </div>
  )
}

export const Home = () => <h3>Home Burger</h3>


export const Order = () => <h3>Order Burger</h3>

export const Kitchen = () => <h3>Kitchen Burger</h3>

export const Withdraw = () => <h3>Withdraw Burger</h3>
