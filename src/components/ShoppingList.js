// eslint-disable-next-line
import React, { useState } from 'react'
import { PizzaList } from '../datas/PizzaList'
import '../styles/ShoppingList.css'
import Categories from './Categories'
import PizzaItem from './PizzaItem'

function ShoppingList({ cart, updateCart }) {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = PizzaList.reduce(
        (acc, pizza) =>
            acc.includes(pizza.category) ? acc : acc.concat(pizza.category),
        []
    )

    function addToCart(name, price) {
        const currentPizzaSaved = cart.find((pizza) => pizza.name === name)
        if (currentPizzaSaved) {
            const cartFilteredCurrentPizza = cart.filter(
                (pizza) => pizza.name !== name
            )

            updateCart([
                ...cartFilteredCurrentPizza,
                { name, price, amount: currentPizzaSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])

        }
    }

    return (
        <div className='lrdp-shopping-list'>

            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />

            <ul className="lrdp-pizza-list">
                {PizzaList.map(({ id, cover, name, price, category, recette }) =>

                    !activeCategory || activeCategory === category ? (
                        
                        <div className="Card" key={id}>
                            <PizzaItem className="description"
                                cover={cover}
                                name={name}
                                price={price}
                                recette={recette}
                            />
                             <button className="ToAdd" onClick={() => addToCart(name, price, recette)}>Ajouter</button>              
                        </div>
                        
                    ) : null
                )}
            </ul>
        </div>
    )
}





export default ShoppingList