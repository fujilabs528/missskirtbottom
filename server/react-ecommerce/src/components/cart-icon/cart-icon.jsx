import React, {useContext} from "react"
import shoppingBag from "../../assets/shopping-bag.png"
import "./cart-icon.styles.scss"
import { CartContext } from "../../context/cart-context"
import {withRouter} from "react-router-dom"

const CartIcon = ({history}) => {
    const {itemCount, cartItems} = useContext(CartContext)
    console.log("cartItems", cartItems)
    return(
        <div 
            className="cart-container"
            onClick={()=> history.push("/cart")}>
            <img src={shoppingBag} alt= "shopping-cart-icon"/>
            {
                itemCount > 0 ? 
                
                <span className="cart-count">
                    {itemCount}
                </span> 
                : null 
            }
           
        </div>
    )
}

export default withRouter(CartIcon)
