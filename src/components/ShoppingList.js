// eslint-disable-next-line
import React, { useState } from 'react'
import {PizzaList} from '../datas/PizzaList'
import '../styles/ShoppingList.css'
import PizzaItem from './PizzaItem'



function ShoppingList({ cart, updateCart}){
    const categories = PizzaList.reduce(
        (acc, pizza) =>
            acc.includes(pizza.category) ? acc : acc.concat(pizza.category),
                []
            )

            function addToCart(name,price){
                const currentPizzaSaved = cart.find((pizza) => pizza.name === name)
                if (currentPizzaSaved){
                    const cartFilteredCurrentPizza = cart.filter(
                        (pizza) => pizza.name !== name
                    )

                    updateCart([
                        ...cartFilteredCurrentPizza,
                        { name, price, amount: currentPizzaSaved.amount + 1}
                    ])
                } else{
                    updateCart([...cart, { name, price, amount: 1 }])

                }
            }
        return(
            <div className='lrdp-shopping-list'>
                
            <div>
                <select className="menu-categories">
                        {categories.map((cat) =>(
                            <option key={cat}>{cat}</option>
                        ))}
                </select>
            </div>

                <ul className="lrdp-pizza-list">
                    {PizzaList.map(({id, cover, name, hot, price}) => (
                        <div key={id}>
                            <PizzaItem
                             cover={cover} 
                             name={name}
                             price={price}
                            //  hot={hot}
                            />    
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                    ))}
                </ul>
            </div>
        )


	}




export default ShoppingList