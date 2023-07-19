import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import './index.css'

const Rating = props => {
  const {rating, onClick} = props
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <button
          type="button"
          onClick={() => onClick(index)}
          className="star-btn"
        >
          {rating > index ? <AiFillStar /> : <AiOutlineStar />}
        </button>
      ))}
    </div>
  )
}
export default Rating
