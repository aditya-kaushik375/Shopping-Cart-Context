import productData from '../productData'
import ProductCard from '../ProductCard'
import './index.css'
import Filter from '../Filter'
import {CartState} from '../../context/Context'

const Home = () => {
  const {
    productState: {byStock, byfastDelivery, sort, byRating, searchQuery},
  } = CartState()

  const filteredProducts = () => {
    let filterProducts = productData
    if (sort) {
      filterProducts = filterProducts.sort((a, b) =>
        sort === 'lowToHigh' ? a.price - b.price : b.price - a.price,
      )
    }
    if (!byStock) {
      filterProducts = filterProducts.filter(each => each.inStock)
    }
    if (byfastDelivery) {
      filterProducts = filterProducts.filter(each => each.fastDelivery)
    }
    if (byRating) {
      filterProducts = filterProducts.filter(each => each.rating >= byRating)
    }
    if (searchQuery) {
      filterProducts = filterProducts.filter(each =>
        each.title.toLowerCase().includes(searchQuery),
      )
    }
    return filterProducts
  }
  return (
    <div className="home-container">
      <div>
        <Filter />
      </div>

      <div className="home-product-container">
        {filteredProducts().map(each => (
          <ProductCard key={each.id} each={each} />
        ))}
      </div>
    </div>
  )
}
export default Home
