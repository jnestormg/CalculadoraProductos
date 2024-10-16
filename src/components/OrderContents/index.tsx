import { MenuITem, OrderItem } from "../../types"

type OrderType={
    order: OrderItem[],
    removeItem:(id: MenuITem['id'])=>void
}

const OrderContents = ({order, removeItem}: OrderType) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-5 mt-5 overflow-auto h-[500px] ">
            {
                order.length ===0 ?
                <p className="text-center">La orden esta vacia</p>
                :
                (
                    order.map(item=>(
                        <div className="flex justify-between border border-gray-300 p-5
                         rounded-[10px] shadow-xl hover:bg-slate-100" 
                        key={item.id}>
                            <div>
                            <p> {item.name}  ${item.price}</p>
                            <p className="font-black">Cantidad: {item.quantity}
                                 
                            </p>
                            <p className="font-black"> Subtotal: {item.price*item.quantity}</p>
                            </div>
                            <button 
                            onClick={()=>removeItem(item.id)}
                            className="font-black bg-red-600 h-8 w-8 text-white rounded-full">X</button>
                        </div>
                    ))
                )
            }
      </div>
    </div>
  )
}

export default OrderContents
