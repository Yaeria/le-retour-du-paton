// eslint-disable-next-line
import React, { useState } from 'react'
import '../styles/Banner.css'


function Banner({ Children, Logo }){
    return (
       
		<> <img src={Logo} alt='Le retour du paton' className='lrdp-logo'></img>
		 <div className='lrdp-banner'>{ Children }</div>
	</>
    )
}

export default Banner