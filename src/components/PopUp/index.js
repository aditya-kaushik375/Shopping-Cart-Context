import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FaShoppingCart} from 'react-icons/fa'
import CartItem from '../CartItem'
import {CartState} from '../../context/Context'

import './index.css'
import 'reactjs-popup/dist/index.css'

const PopUp = () => {
  const {
    state: {cart},
  } = CartState()
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="header-cart">
            <FaShoppingCart size={20} />
            <span className="cart-length">{cart.length}</span>
          </button>
        }
      >
        {close => (
          <>
            <div>
              {cart.length > 0 ? (
                <>
                  {cart.map(eachProd => (
                    <CartItem key={eachProd.id} eachProd={eachProd} />
                  ))}
                </>
              ) : (
                <h2>Your Cart Is Empty</h2>
              )}
            </div>

            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
            <Link to="/cart" className="nav-link">
              <button type="button" className="go-to-cart-btn">
                Go To Cart
              </button>
            </Link>
          </>
        )}
      </Popup>
    </div>
  )
}

export default PopUp
