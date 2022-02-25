import React from 'react'
import CareScale from './CareScale'
import '../styles/PizzaItem.css'

function PizzaItem({id, cover, name, hot}){
    function handleClick(pizzaName){
        alert (`Vous voulez acheter 1 ${pizzaName} ?`)
    }

    // function handleClick(e){
    //     console.log('Ceci est mon event :', e)
    // }
    return (
        <li key={id} className='lrdp-pizza-item' onClick={() =>handleClick(name)}>
            <img className='lrdp-pizza-item-cover' src={cover} alt={`${name} cover`} />
        {name}

            <div>
                {/* <CareScale careType='hot' scaleValue={hot} /> */}
            </div>
        </li>
    )
}



export default PizzaItem