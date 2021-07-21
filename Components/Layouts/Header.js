import './Header.css';
import { Fragment } from 'react';
import food from '../UI/foods.jpg'
import Cart from '../Cart/Cart';
const Header=()=>{


    return(
        <Fragment>
            <header className="header-nav">
                <h1 className="nav-header">
                    Food App
                </h1>
                <Cart />
            </header>
            <div className="header-img">
                <img src={food} alt="food app" width="100%" height="300px" />
            </div>
        </Fragment>
    )
}

export default Header