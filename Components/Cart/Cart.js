import { Fragment } from "react"
import './Cart.css'


const Cart =()=>
{

    return (
        <Fragment>
            <div className="cart-button">
            <span><img src="https://img.icons8.com/material-outlined/35/000000/fast-cart.png"/></span>
            <span className="cart-text">Your Cart</span>
            <span className='cart-number'>3</span>
            </div>
        </Fragment>
    )
}

export default Cart