import { menuItems } from "../src/data/db"
import Buscador from "./components/Buscador";
import Menu from "./components/Menu";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import useOrder from "./hooks/useOrder";
import { MenuITem } from "./types";

function App() {

  console.log(menuItems);

  const { order,addItem, removeItem, datos, setDatos, datos1 } = useOrder()

  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl'>Texto</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 xl gap-5 ">
        <div>
          <h2 className="font-bold text-4xl mb-2">Menú</h2>

         <Buscador 
         datos={datos}
         datos1={datos1}
         setDatos={setDatos} 
         addItem={addItem}
         />
        
          {datos.map((item: MenuITem) => {
            return (
              <Menu
                key={item.id}
                item={item}
                addItem={addItem}
              />
            )
          })
          }
        </div>
        <div>
          <div className="border border-dashed
           border-slate-300 p-5  rounded-lg space-y-5">
              <OrderContents
              order={order}
              removeItem={removeItem}
              />
              <OrderTotals
              order={order} />
          </div>
        </div>
      </main>

    </>
  )
}

export default App
