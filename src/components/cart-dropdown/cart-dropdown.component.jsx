import React from 'react'

import './cart-dropdown.style.scss'


import CustomBotton from '../custom-button/custom-button.component'

const CartDropdown = () => (
   <div className='cart-dropdown'>
     <div className='cart-item'/>
     <CustomBotton>GO TO CHECKOUT</CustomBotton>
   </div>
)

export default CartDropdown