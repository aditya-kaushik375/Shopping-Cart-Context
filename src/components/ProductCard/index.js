import './index.css'
import Rating from '../Rating'
import {CartState} from '../../context/Context'

const ProductCard = props => {
  const {each} = props
  const {id, title, image, price, fastDelievery, rating, inStock} = each
  const {
    state: {cart},
    dispatch,
  } = CartState()
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <div className="product-details">
        <h3>{title}</h3>
        <h4>₹ {price}</h4>
        <p>{fastDelievery ? 'Fast Delivery' : '3 Days Delivery'}</p>
        <Rating rating={rating} />
        <div>
          {cart.some(product => product.id === id) ? (
            <button
              type="button"
              className="remove-from-cart-btn"
              onClick={() =>
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: each,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: each,
                })
              }
              className={inStock ? 'add-to-cart-btn' : 'out-of-stock-btn'}
              disabled={!inStock}
            >
              {inStock ? 'Add To Cart' : 'Out Of Stock'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
