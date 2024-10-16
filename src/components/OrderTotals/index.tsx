
import { useMemo } from "react"
import { OrderItem } from "../../types"

type OrderItemProps = {
    order: OrderItem[]
}

function OrderTotals({ order }: OrderItemProps) {

    //con la funcion reduce calcula el subtotal 
    const subtotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    return (
        <>
            <div className="space-y-5">
                <h2 className="font-black text-2xl">Total:  ${subtotal}</h2>
            </div>
            <button></button>
        </>
    )
}

export default OrderTotals
