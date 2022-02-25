import montagnarde from '../assets/pizza-montagnarde.jpg'

export const PizzaList = [
    {
        name: 'montagnarde',
        category: 'fromages',
        id: '1fro',
        isBestSale: false,
        hot: 3,
        cover: montagnarde,
        price: 10
    },
  
    {
        name:'savoyarde',
        category: 'fromages',
        id:'2fro',
        isBestSale: true,
        isSpecialOffer: true,
        hot: 2,
        cover: montagnarde,
        price: 12
    },
    
    {
        name: '4 fromages',
        category: 'fromages',
        id:'3fro',
        isBestSale: false,
        isSpecialOffer: true,
        hot: 3,
        cover: montagnarde,
        price: 10
    },
   
    {
        name: 'chèvre miel',
        category: 'formages',
        id: '4fro',
        isBestSale: true,
        hot: 3,
        cover: montagnarde,
        price: 11
    },

    {
        name: 'bourguignonne',
        category: 'viandes',
        id:'1via',
        isBestSale: true,
        hot: 3,
        cover: montagnarde,
        price: 12    
    },

    {
        name: 'mexicaine',
        category: 'viandes',
        id: '2via',
        isBestSale: true,
        hot: 3,
        cover: montagnarde,
        price: 10
    },

    {
        name: 'kebab',
        category: 'viandes',
        id: '3via',
        isBestSale: false,
        hot: 3,
        cover: montagnarde,
        price: 8
    },

    {
        name: 'gourmande',
        category: 'spéciales',
        id: '1spe',
        hot: 3,
        cover: montagnarde,
        price: 10
    },

    {
        name: 'Hawaïenne',
        category: 'spéciales',
        id: '2spe',
        cover: montagnarde,
        price: 8
    },

    {
        name: 'chef',
        category: 'spéciales',
        id: '3spe',
        cover: montagnarde,
        price: 13
    }

]