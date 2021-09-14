export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartIte = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    )

    if (existingCartIte) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

