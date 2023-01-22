// Write your code here.
import './index.css'

const ThumbNailItem = props => {
  const {thumbNailDetails, thumbnailChange, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbNailDetails

  const thumbnailChangeItem = () => {
    thumbnailChange(id)
  }

  const style = isActive ? 'thumbnail active' : 'thumbnail'

  return (
    <li className="thumbnail-container">
      <button className="button" type="button" onClick={thumbnailChangeItem}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={style} />
      </button>
    </li>
  )
}

export default ThumbNailItem
