import { createContext, useState } from 'react'
import { categorias as categoriasDB } from "../data/categorias"

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [categorias, setCategorias] = useState(categoriasDB);
    const [modal, setModal] = useState(false);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0]);

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal)
        console.log (modal)
    }

    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                modal,
                handleClickModal,
                handleClickCategoria
            }}
        >{children}</QuioscoContext.Provider>
    )
}

export { QuioscoProvider }
export default QuioscoContext
