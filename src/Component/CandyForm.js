import { useState } from "react";
import Card from "../UI/Card";
import classes from './CandyForm.module.css'

const CandyForm = (props) => {
    const [candyName,setCandyName]=useState('');
    const [candyDescription,setCandyDescription]=useState('');
    const [candyPrice,setCandyPrice]=useState('');
    const submitHandler = (event) => {
        event.preventDefault();
        if(candyName.trim().length<=0 || candyDescription.trim().length<=0 || candyPrice.trim().length<=0)
        {
            return
        }
        const CandyDetail={
            name:candyName,
            description:candyDescription,
            price:candyPrice
        }
        localStorage.setItem(CandyDetail.name,JSON.stringify(CandyDetail))
        props.onAddCandy(CandyDetail)
        setCandyName('');
        setCandyDescription('')
        setCandyPrice('');
    }

    const nameChangeHandler = (event) => {
        setCandyName(event.target.value)
     }

     const descriptionChangeHandler = (event) => {
        setCandyDescription(event.target.value)
     }

     const priceChangeHandler = (event) => {
        setCandyPrice(event.target.value)
     }


    return (
        <Card className={classes.input}>
        
        <form onSubmit={submitHandler} >
            <label>Candy Name:</label>
            <input type="text" value={candyName} onChange={nameChangeHandler}/>
            <label>Description:</label>
            <input type="text" value={candyDescription} onChange={descriptionChangeHandler}/>
            <label>Price:</label>
            <input type="Number" value={candyPrice} onChange={priceChangeHandler}/>
            <button  className={classes.button} type="submit">Add Candy</button>
        </form>
        
        </Card>
    )
}

export default CandyForm