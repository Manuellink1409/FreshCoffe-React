import { Link } from 'react-router-dom'

export default function login() {
  return (
    <>
        <h1 className=" text-4xl font-black">Inicia Sesión</h1>
        <p>Para crear un pedido deber iniciar sesión.</p>

        <div className=" bg-white shadow-md rounded-md py-10 mt-10 px-5">
            <form action="">
                <div className=" mb-4">
                    <label 
                        className=" text-slate-800"
                        htmlFor="email"
                        id="email"
                    >Correo Electronico:</label>
                    <input 
                        type="email"
                        id="email"
                        className=" mt-2 w-full p-3 bg-gray-50"
                        name="email"
                        placeholder="Correo Electronico"
                    />
                </div>

                <div className=" mb-4">
                    <label 
                        className=" text-slate-800"
                        htmlFor="password"
                        id="password"
                    >Contraseña:</label>
                    <input 
                        type="password"
                        id="password"
                        className=" mt-2 w-full p-3 bg-gray-50"
                        name="password"
                        placeholder="Contraseña"
                    />
                </div>

                <input 
                    type="submit" 
                    value="Iniciar Sesión"
                    className=" bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer "
                />
            </form>
        </div>

        <nav className=" mt-5">
            <Link to="/auth/registro">
                ¿No tienes cuenta? crea una.
            </Link>
        </nav>

    </>
  )
}
