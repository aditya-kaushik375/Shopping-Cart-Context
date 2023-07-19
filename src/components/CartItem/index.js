import './index.css'

import {AiFillDelete} from 'react-icons/ai'
import {CartState} from '../../context/Context'

const CartItem = props => {
  const {eachProd} = props
  const {image, title, price} = eachProd
  const {dispatch} = CartState()
  return (
    <div className="cart-item-card">
      <img src={image} alt={title} className="cart-image" />

      <h3>{title}</h3>
      <h4>₹ {price}</h4>

      <button
        type="button"
        className="header-delete"
        onClick={() =>
          dispatch({
            type: 'REMOVE_FROM_CART',
            payload: eachProd,
          })
        }
      >
        <AiFillDelete />
      </button>
    </div>
  )
}

export default CartItem
