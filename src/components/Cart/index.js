import './index.css'
import {useState, useEffect} from 'react'
import {CartState} from '../../context/Context'
import CartOrderItem from '../CartOrderItem'

const Cart = () => {
  const {
    state: {cart},
  } = CartState()
  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc, cv) => acc + cv.price * cv.qty, 0))
  }, [cart])

  return (
    <div className="cart-container">
      <div className="cart-products">
        <ul>
          {cart.map(each => (
            <CartOrderItem key={each.id} each={each} />
          ))}
        </ul>
      </div>
      <div className="cart-summary">
        <h3 className="total-title">SubTotal ({cart.length}) Items</h3>
        <h3>Total Amount : ₹ {total}</h3>
      </div>
    </div>
  )
}

export default Cart
