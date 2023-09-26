import React from "react"

const CartContext=React.createContext({
    candies:[],
    totalAmount:0,
    addItem:(item) => {},
    removeItem:(id) => {},
    clearCart:() => {}
})

export default CartContext