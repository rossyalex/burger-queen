export const Login = () => {
  return (
    <div className="bg-blue-600 bg-opacity-50 border border-transparent rounded">
      <form
        onSubmit={ ev => {
          ev.preventDefault();
          console.log(ev.target.search.value);
        }}
        className="flex flex-col"
      >
        <input className="mx-auto bg-white text-black border rounded w-3/5 h-12 p-2 my-4" type="email" placeholder="Email"/>
        <input className="mx-auto bg-white text-black border rounded w-3/5 h-12 p-2 my-4" type="password" placeholder="Contraseña" />
        <button className="mx-auto w-3/5 border rounded bg-amber-500 text-2xl font-bold p-2 my-4" type="submit">Ingresar</button>
      </form>
    </div>
  );
}
