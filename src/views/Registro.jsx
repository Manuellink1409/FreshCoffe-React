import { Link } from 'react-router-dom'

export default function Registro() {
  return (
    <>
        <h1 className=" text-4xl font-black">Crea tu cuenta</h1>
        <p>Crea tu cuenta llenando un formulario</p>

        <div className=" bg-white shadow-md rounded-md py-10 mt-10 px-5">
            <form action="">
                <div className=" mb-4">
                    <label 
                        className=" text-slate-800"
                        htmlFor="name"
                        id="name"
                    >Nombre:</label>
                    <input 
                        type="text"
                        id="name"
                        className=" mt-2 w-full p-3 bg-gray-50"
                        name="name"
                        placeholder="Nombre Completo"
                    />
                </div>

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

                <div className=" mb-4">
                    <label 
                        className=" text-slate-800"
                        htmlFor="password_confirmation"
                        id="password_confirmation"
                    >Repetir Contraseña:</label>
                    <input 
                        type="password"
                        id="password_confirmation"
                        className=" mt-2 w-full p-3 bg-gray-50"
                        name="password_confirmation"
                        placeholder="Contraseña"
                    />
                </div>

                <input 
                    type="submit" 
                    value="Crear Cuenta"
                    className=" bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer "
                />
            </form>
        </div>

        <nav className=" mt-5">
            <Link to="/auth/login">
                ¿Ya tienes cuenta? inicia sesión.
            </Link>
        </nav>
    </>
  )
}
