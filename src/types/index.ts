export type MenuITem ={
    id: number,
    name: string,
    price: number
}

//le pasa lo que tiene MenuItem más el nueva propiedad
export type OrderItem= MenuITem &{
    quantity: number;
}