import { Fragment } from "react"
import candyImage from '../../assests/candy.jpg';
import classes from './Header.module.css'
import HeaderButtonCart from "./HeaderButtonCart";


const Header = (props) => {
    return (
        <Fragment>
        <header className={classes.header}>
            <h1>Candies For Everyone</h1>
            <HeaderButtonCart onOpen={props.onOpen}/>
        </header>
        <div className={classes['main-image']}>
        <img src={candyImage} alt="Candy on page"/>
        </div>
        </Fragment>
    )
}

export default Header