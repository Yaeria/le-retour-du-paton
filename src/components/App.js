import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import CareScale from './CareScale'
import Footer from './Footer'
import Logo from '../assets/pizza.jpg'
import '../styles/Layout.css'


function App(){

  // Permet de sauvegarder notre panier grâce à localStorage.setItem()
  //  Comme notre cart passe en objet il faut utiliser JSON.stringify et JSON.parse
      const savedCart = localStorage.getItem('cart')
      const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
      useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(cart))
      }, [cart])

  return(
    <div>
    <Banner Children='Le retour du paton' Logo={Logo} />

      <div className='lrdp-layout-inner'>
          <ShoppingList cart={cart} updateCart={updateCart} />
          <Cart cart={cart} updateCart={updateCart} />
        </div>   
      <CareScale />
      {/* <QuestionForm /> */}
      <Footer />
    </div>
  )  
} 

export default App
