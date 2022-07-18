// import { AirlineSeatReclineNormalTwoTone } from '@material-ui/icons'
import montagnarde from '../assets/pizza-montagnarde.jpg'

export const PizzaList = [
    {
        name: 'végétarienne',
        category: 'spéciales',
        id: '1fro',
        isBestSale: false,
        hot: 3,
        cover: montagnarde,
        price: 10,
        recette: `Tomate, champignons, ail, poivrons, courgettes grillées, mozzarella, artichauts`
    },
  
    {
        name:'savoyarde',
        category: 'fromages',
        id:'2fro',
        isBestSale: true,
        isSpecialOffer: true,
        hot: 2,
        cover: montagnarde,
        price: 12,
        recette: `Crème fraîche, pomme de terre, reblochon, oignons`
    },
    
    {
        name: '4 fromages',
        category: 'fromages',
        id:'3fro',
        isBestSale: false,
        isSpecialOffer: true,
        hot: 3,
        cover: montagnarde,
        price: 10,
        recette: 'base sauce tomate, emmental, mozzarella, gorgonzollar, parmesan'
    },
   
    {
        name: 'chèvre miel',
        category: 'fromages',
        id: '4fro',
        isBestSale: true,
        hot: 3,
        cover: montagnarde,
        price: 11,
        recette: `Crème fraîche, chèvre, mozzarella, miel`
    },

    {
        name: 'bourguignonne',
        category: 'viandes',
        id:'1via',
        isBestSale: true,
        hot: 3,
        cover: montagnarde,
        price: 12,
        recette: `Tomate, champignons, boeuf haché, oignons, beurre d'ail, emmental, origan`    
    },

    {
        name: 'mexicaine',
        category: 'viandes',
        id: '2via',
        isBestSale: true,
        hot: 3,
        cover: montagnarde,
        price: 10, 
        recette: `Tomate, boeuf haché, merguez, chorizo, poudre de piment, emmental`
    },

    {
        name: 'kebab',
        category: 'viandes',
        id: '3via',
        isBestSale: false,
        hot: 3,
        cover: montagnarde,
        price: 8,
        recette: `Crème fraîche, emmental, viande de Kebab, oignons, sauce pita`
    },

    {
        name: 'gourmande',
        category: 'spéciales',
        id: '1spe',
        hot: 3,
        cover: montagnarde,
        price: 10,
        recette: 'Tomate, jambon, lardons fumés, champignons, chorizo, oignons, ail, oeuf, crème, emmental, origan'
    },

    {
        name: 'Hawaïenne',
        category: 'spéciales',
        id: '2spe',
        cover: montagnarde,
        price: 8,
        recette: `Tomate, filet de poulet, emmental, ananas`
    },

    {
        name: 'chef',
        category: 'spéciales',
        id: '3spe',
        cover: montagnarde,
        price: 13,
        recette: `Tomate, lardons fumés, champignons, saucisson à l'ail, beurre d'ail, emmental, origan`
    }

]