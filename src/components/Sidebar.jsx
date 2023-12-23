import useQuiosco from '../hooks/useQuiosco'
import Categoria from './Categoria'

export default function Sidebar() {

    const {categorias} = useQuiosco ();

  return (
    <aside className=" md:w-72">
        <div className=" p-4">
            <img
                className="w-40 mx-auto" 
                src="img/logo.svg"
                alt="" 
            />
        </div>
        <div className=" mt-10">
            {categorias.map( categoria => (
                <Categoria
                    categoria={categoria}
                    key={categoria.id}
                />
            ))}
        </div>

        <div className=' my-5 px-5'>
                <button 
                    type='button'
                    className=' p-3 w-full bg-red-500 text-center font-bold text-white truncate'>
                    Cancelar Orden
                </button>
        </div>
    </aside>
  )
}
