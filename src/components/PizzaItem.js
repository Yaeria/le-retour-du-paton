import React from 'react'
import '../styles/PizzaItem.css'

function PizzaItem({id, cover, name, price, recette}){
    

    return (
        <li key={id} className='lrdp-pizza-item'>
            <img className='lrdp-pizza-item-cover' src={cover} alt={`${name} cover`} />
            <span className='lrdp-pizza-item-name'>{name}</span>
            <span className='lrdp-pizza-item-price'>{price}€</span>
            <span className='lrdp-pizza-item-recette'>{recette}</span>
            <div>
            </div>
        </li>
    )
}



export default PizzaItem