import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {selectCartItemsCount} from  '../../redux/cart/cart.selectors'

import './car-icon.style.scss'

const CartIcon = ({toggleCartHidden, itemcount}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
       <ShoppingIcon className='shopping-icon'/>
       <span className='item-count'>{itemcount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemcount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);