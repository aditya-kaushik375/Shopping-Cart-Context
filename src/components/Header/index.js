import {Link} from 'react-router-dom'
import {CartState} from '../../context/Context'
import PopUp from '../PopUp'
import './index.css'

const Header = () => {
  const {productDispatch} = CartState()
  return (
    <nav className="nav-header">
      <Link to="/" className="nav-link">
        <h3>Shopping Cart</h3>
      </Link>
      <input
        type="search"
        placeholder="Enter A Search Keyword"
        className="nav-search"
        onChange={e =>
          productDispatch({
            type: 'FILTER_BY_SEARCH',
            payload: e.target.value,
          })
        }
      />
      <PopUp />
    </nav>
  )
}
export default Header
