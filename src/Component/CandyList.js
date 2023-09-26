import { useContext } from "react";
import Card from "../UI/Card";
import classes from './CandyList.module.css'
import CartContext from "../auth-context/CartContext";

const CandyList = (props) => {

const cartCtx = useContext(CartContext);

const addItemToCart = (candy,amount) => {
    cartCtx.addItem({
        id:candy.name,
        name:candy.name,
        amount:+amount,
        price:candy.price
    })
}
    

return (
    <Card className={classes.users}>
        <ul>
            {
                props.candies.map((candy) => (
                    <li key={candy.name}>
                        {candy.name} - {candy.description} - ${candy.price} 
                        <button className={classes.button1} 
                        onClick={()=>addItemToCart(candy,1)}>Buy One</button>
                         <button className={classes.button2}
                         onClick={() =>addItemToCart(candy,2)}>Buy Two</button>
                         <button className={classes.button3} 
                         onClick={() =>addItemToCart(candy,3)}>Buy Three</button>
                    </li>
                ))
            }
        </ul>
    </Card>
)
}

export default CandyList;