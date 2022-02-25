import React, { useState } from 'react'
import '../styles/Footer.css'

function Footer(){
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur(){
        if (!inputValue.includes('@')){
            alert("Il n'y a pas @, votre adresse est donc invalide")
        }

    }



return (
    <footer className='lrdp-footer'>
        
        <div className='lrdp-footer-elem'>
                Des produits frais, pour une dégustation fabuleuse.
        </div> 

        <div className ="lrdp-footer-elem"> Laissez-nous votre mail : </div>

        <input placeholder='Entrez votre email' 
                            onChange={handleInput} 
                            value={inputValue} 
                            onBlur={handleBlur}
         />


    </footer>

    )
}

export default Footer