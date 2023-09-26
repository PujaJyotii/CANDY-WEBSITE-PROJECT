import { useReducer } from "react"
import CartContext from "./CartContext"

const defaultCartState ={
  candies:[],
  totalAmount:0
}

const cartReducer=(state,action) => {
  if(action.type === 'ADD')
  {
      const updatedTotalAmount = state.totalAmount + action.item.price*action.item.amount;
      const existingCartItemIndex = state.candies.findIndex(item => item.id === action.item.id)

      const existingCartItem = state.candies[existingCartItemIndex];
      let updatedItems;

      if(existingCartItem)
      {
         const updatedItem ={...existingCartItem,
          amount: existingCartItem.amount + action.item.amount
      };
      updatedItems=[...state.candies];
      updatedItems[existingCartItemIndex] = updatedItem;

      }
      else {

          updatedItems = state.candies.concat(action.item)
      }
      return {
          candies:updatedItems,
          totalAmount: updatedTotalAmount
      }
  }
  if(action.type === 'REMOVE')
    {
        const existingCartItemIndex = state.candies.findIndex ((item) => item.id === action.id

        );
        const existingItem = state.candies[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1)
        {
            updatedItems = state.candies.filter(item => item.id !== action.id)
        }
        else
        {
            const updatedItem = {...existingItem,amount:existingItem.amount-1};
            updatedItems = [...state.candies];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            candies : updatedItems,
            totalAmount : updatedTotalAmount
        }
    }
    if(action.type === 'CART REMOVE')
    {
      return defaultCartState
    }
    return defaultCartState
  
  
  
}


const CartProvider= (props) => {
    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState)
    

    const addItemHandler = (item) => {
      dispatchCartAction({type:'ADD' ,item:item})
    }

    const removeItemHandler = (id) => {
      dispatchCartAction({type:'REMOVE',id:id})
    }

    const clearCartHandler = () => {
      dispatchCartAction({type:'CART REMOVE'})
    }

    const cartcontext={
        candies:cartState.candies,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
        clearCart:clearCartHandler
    }



    return (
        <CartContext.Provider value={cartcontext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider