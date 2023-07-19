import {createContext, useReducer, useContext} from 'react'

import productData from '../components/productData'

import {cartReducer, productReducer} from './Reducer'

const Cart = createContext()

const Context = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: productData,
    cart: [],
  })

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byfastDelivery: false,
    byRating: 0,
    searchQuery: '',
  })

  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default Context

export const CartState = () => useContext(Cart)
