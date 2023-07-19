import './index.css'

import {AiFillDelete, AiFillMinusCircle} from 'react-icons/ai'
import {BsPlusCircleFill} from 'react-icons/bs'
import {CartState} from '../../context/Context'
import Rating from '../Rating'

const CartOrderItem = props => {
  const {dispatch} = CartState()
  const {each} = props
  const {id, title, qty, image, price, rating} = each
  console.log(each)
  return (
    <li className="cart-order-item">
      <img src={image} alt={title} className="cart-order-img" />
      <h3>{title}</h3>
      <h2>₹ {price}</h2>
      <Rating rating={rating} />
      <div className="quantity-div">
        <button
          type="button"
          className="quantity-btn"
          onClick={() =>
            dispatch({
              type: 'DECREASE_CART_QTY',
              payload: {
                id,
                qty,
              },
            })
          }
        >
          <AiFillMinusCircle />
        </button>
        <h3 className="quantity-text">{qty}</h3>
        <button
          type="button"
          className="quantity-btn"
          onClick={() =>
            dispatch({
              type: 'INCREASE_CART_QTY',
              payload: {
                id,
                qty,
              },
            })
          }
        >
          <BsPlusCircleFill />
        </button>
      </div>
      <button
        type="button"
        className="header-delete"
        onClick={() =>
          dispatch({
            type: 'REMOVE_FROM_CART',
            payload: each,
          })
        }
      >
        <AiFillDelete />
      </button>
    </li>
  )
}

export default CartOrderItem
