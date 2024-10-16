import { useState } from "react"
import type{MenuITem, OrderItem} from "../types"
import { menuItems } from "../data/db";

export default function useOrder(){

    //<generico> indica de que tipo generico es 
    const[order, setOrder]= useState<OrderItem[]>([]);

    const [datos, setDatos]= useState(menuItems);
    const [datos1]= useState(menuItems);

    console.log(datos);
    

    const addItem=(item: MenuITem)=>{
        const itemExists=order.find(orderItem=>orderItem.id===item.id);
        if(itemExists){
            const actualizarOrden=order.map(orderItem=>orderItem.id===item.id ?
                {...orderItem, quantity: orderItem.quantity+1}:
                orderItem
            )      
            setOrder(actualizarOrden)      
        }
        else{
            const newItem={...item,quantity:1}
            setOrder([...order, newItem])
        }
        
    }

    //filtra solo los elemntos diferentes del id y devuelve un nuevo arrglo con los elementos diferentes
    const removeItem=(id : MenuITem['id'])=>{
        console.log("remover", id);
        setOrder(order.filter(item=>item.id!=id))
        
    }

  
    console.log(order);
    

    return{
        addItem,
        order,
        removeItem,
        datos,
        datos1,
        setDatos
    }
}