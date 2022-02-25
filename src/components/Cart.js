
import React, { useState } from 'react'
import '../styles/Cart.css'


function Cart({ cart, updateCart }){
    const [isOpen, setIsOpen] = useState(true)
	

	

    const total = cart.reduce(
        (acc,PizzaType) => acc + PizzaType.amount * PizzaType.price,0
    )

    return isOpen ?( 
      
    <div className ="lrdp-cart">
        <button className='lrdp-cart-toggle-button' onClick = {() => setIsOpen(false)}>Fermer</button>

        {cart[0] ?(
		
            <div>
                <h2>Panier</h2>
                <ul>
                    {cart.map(({ name, price, amount }, index) => (
                        <div key={`${name}-${index}`}>
                            {name} {price}€ *{amount}
                        </div>
                    ))}
                </ul>
                    <h3>Total :{total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
            </div>    
    ) : (
            <div>Votre panier est vide</div>
    )}
    </div>
    
    ) : (
        <div className='lrdp-cart-closed'>
             <button className='lrdp-cart-toggle-button'
                 onClick={() => setIsOpen(true)}>
                Ouvrir le panier</button>
    
        </div>
    )
}

export default Cart