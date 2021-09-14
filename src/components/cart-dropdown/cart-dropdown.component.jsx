import React from 'react'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'


import './cart-dropdown.style.scss'


import CustomBotton from '../custom-button/custom-button.component'

const CartDropdown = ({cartItems}) => (
   <div className='cart-dropdown'>
     <div className='cart-items'>
      {
         cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
       }
      </div>
     <CustomBotton>GO TO CHECKOUT</CustomBotton>
   </div>
)

const mapStateToProps = ({ cart: {cartItems}}) =>({
   cartItems
})


export default connect(mapStateToProps)(CartDropdown) 