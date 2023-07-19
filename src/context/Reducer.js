const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {...state, cart: [...state.cart, {...action.payload, qty: 1}]}
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(each => each.id !== action.payload.id),
      }
    case 'INCREASE_CART_QTY':
      return {
        ...state,
        cart: state.cart.map(each => {
          if (each.id === action.payload.id) {
            const updatedQty = each.qty + 1
            return {...each, qty: updatedQty}
          }
          return each
        }),
      }
    case 'DECREASE_CART_QTY':
      if (state.cart.find(each => each.id === action.payload.id).qty > 1) {
        return {
          ...state,
          cart: state.cart.map(each => {
            if (each.id === action.payload.id) {
              const updatedQty = each.qty - 1
              return {...each, qty: updatedQty}
            }
            return each
          }),
        }
      }
      return {
        ...state,
        cart: state.cart.filter(each => each.id !== action.payload.id),
      }

    default:
      return state
  }
}

const productReducer = (productState, action) => {
  switch (action.type) {
    case 'SORT_BY_PRICE':
      return {...productState, sort: action.payload}
    case 'FILTER_BY_STOCK':
      return {...productState, byStock: !productState.byStock}
    case 'FILTER_BY_DELIVERY':
      return {...productState, byfastDelivery: !productState.byfastDelivery}
    case 'FILTER_BY_RATING':
      return {...productState, byRating: action.payload}
    case 'FILTER_BY_SEARCH':
      return {...productState, searchQuery: action.payload}
    case 'CLEAR_FILTER':
      return {
        byRating: 0,
        searchQuery: '',
        byfastDelivery: false,
        byStock: false,
      }
    default:
      return productState
  }
}

export {productReducer, cartReducer}
