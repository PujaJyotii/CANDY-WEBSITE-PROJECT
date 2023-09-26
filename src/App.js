import {  useEffect, useState } from "react";
import CandyForm from "./Component/CandyForm";
import Header from "./Component/Layout/Header";
import CandyList from "./Component/CandyList";
import Cart from "./Cart/Cart";
import CartProvider from "./auth-context/CartProvider";


function App() {
  const [candyList,setCandyList] = useState([]);
  const [showCart,setShowCart] = useState(false)

  useEffect(() => {
    const storedProducts = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setCandyList(storedProducts);
  },[]);

const candyHandler = (candyDetails) => {
  setCandyList((prevList) => {
    return [...prevList,candyDetails ]
  })
}

const showCartHandle = () => {
  setShowCart(true)
}

const hideCartHandler = () => {
  setShowCart(false)
}

  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler}/>}
     <Header onOpen={showCartHandle}/>
      <CandyForm onAddCandy={candyHandler}/>
      <CandyList candies={candyList} />
      </CartProvider>
  );
}

export default App;
