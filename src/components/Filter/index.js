import './index.css'
import {CartState} from '../../context/Context'
import Rating from '../Rating'

const Filter = () => {
  const {
    productState: {byStock, byfastDelivery, sort, byRating, searchQuery},
    productDispatch,
  } = CartState()
  console.log(byRating, byStock, byfastDelivery, sort, searchQuery)
  return (
    <div className="filters">
      <span className="filter-title">Filters Product</span>
      <span>
        <input
          type="radio"
          id="asc"
          name="group1"
          onChange={() =>
            productDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'lowToHigh',
            })
          }
          checked={sort === 'lowToHigh' && true}
        />
        <label htmlFor="asc">Ascending</label>
      </span>
      <span>
        <input
          type="radio"
          id="dsc"
          name="group1"
          onChange={() =>
            productDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'highToLow',
            })
          }
          checked={sort === 'highToLow' && true}
        />
        <label htmlFor="dsc">Descending</label>
      </span>
      <span>
        <input
          type="checkbox"
          name="group1"
          id="stock"
          onChange={() =>
            productDispatch({
              type: 'FILTER_BY_STOCK',
            })
          }
          checked={byStock}
        />
        <label htmlFor="stock">Includes Out of Stock</label>
      </span>
      <span>
        <input
          type="checkbox"
          name="group1"
          id="delivery"
          onChange={() =>
            productDispatch({
              type: 'FILTER_BY_DELIVERY',
            })
          }
          checked={byfastDelivery}
        />
        <label htmlFor="delivery">Fast Delivery Only</label>
      </span>

      <span className="rating-text">Rating :</span>

      <Rating
        rating={byRating}
        onClick={index =>
          productDispatch({
            type: 'FILTER_BY_RATING',
            payload: index + 1,
          })
        }
      />

      <button
        type="button"
        className="clear-filter-btn"
        onClick={() =>
          productDispatch({
            type: 'CLEAR_FILTER',
          })
        }
      >
        Clear Filter
      </button>
    </div>
  )
}
export default Filter
