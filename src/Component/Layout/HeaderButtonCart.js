import { useContext } from 'react'
import CartIcon from './CartIcon'
import classes from './HeaderButtonCart.module.css'
import CartContext from '../../auth-context/CartContext'

const HeaderButtonCart = (props) => 
{
    const cartCtx=useContext(CartContext)
    const totalNumber= cartCtx.candies.reduce((prevVal,item) => (
     prevVal+item.amount
    ),0)
    return (
        <button className={classes.button} onClick={props.onOpen}>
       <span className={classes.icon}><CartIcon/></span>
       <span>Cart</span>
       <span className={classes.badge}>{totalNumber}</span>

        </button>
    )
    }

export default HeaderButtonCart