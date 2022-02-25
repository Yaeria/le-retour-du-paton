import React, { useState } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import CareScale from './CareScale'
// import QuestionForm from './QuestionForm'
import Footer from './Footer'
import Logo from '../assets/pizza.jpg'
import '../styles/Layout.css'


function App(){
      const [cart, updateCart] = useState([])
  
  return(
    <div>
    <Banner Children='Le retour du paton' Logo={Logo} />

      <div className='lrdp-layout-inner'>
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingList cart={cart} updateCart={updateCart} />
        </div>   
      <CareScale />
      {/* <QuestionForm /> */}
      <Footer />
    </div>
  )  
} 

export default App



