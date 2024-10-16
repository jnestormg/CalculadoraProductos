import { useState } from "react";
import { MenuITem } from "../../types"

type MenuItemProps = {
    datos: MenuITem[],
    datos1: MenuITem[],
    addItem: (item: MenuITem) => void,
    setDatos: React.Dispatch<React.SetStateAction<MenuITem[]>>
}

const Buscador = ({ datos, datos1, setDatos }: MenuItemProps) => {
    const [valor, setValor] = useState<string>();

    const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValor(e.target.value);
        console.log("entrada", e.target.value);
    }

    const serarch = () => {
        const dat = datos.filter(item => item.name == valor);
        console.log("filtrado", dat);
        setDatos(dat);
    }

    const mostrarTodo = () => {
        console.log("ndcui");
        setDatos(datos1)
    }

    return (
        <>
            <div className="flex justify-between p-5">
                <div className="relative w-[70%]">
                    <input className="border border-slate-500 w-full m-1 h-12 p-4 rounded-md"
                        placeholder="Buscar..." value={valor} onChange={handleText} />
                    <button onClick={() => mostrarTodo()}
                        className="absolute right-2 top-4
                         bg-stone-500 rounded-full h-6 w-6 text-yellow-50"  >X</button>
                </div>
                <button onClick={() => serarch()}
                    className="bg-slate-600 text-white 
                p-3 rounded-md hover:bg-slate-400"  >Buscar</button>
            </div>


        </>
    )
}

export default Buscador
