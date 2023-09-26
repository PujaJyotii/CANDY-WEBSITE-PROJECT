import { useContext } from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'

import CartItem from './CartItem'
import CartContext from '../auth-context/CartContext'

const Cart = props => {
    const cartCtx=useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.candies.length>0

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item,amount:1})
    }

    const cartItems=(
    <ul className={classes['cart-items']}>
        {cartCtx.candies.map((item) => (
            <CartItem  key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null,item.id)}
            onAdd={cartItemAddHandler.bind(null,item)}/>
        ))}

    </ul>
    )
    const orderHandler = () => {
        cartCtx.clearCart()
        alert('Thank you! we got your order')

    }
    return (
        <Modal onClose={props.onClose}>
            {cartItems}
        <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
           {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
         </div>
         </Modal>
    )

}

export default Cart