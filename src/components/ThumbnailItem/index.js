import './index.css'

const ThumbnailItems = props => {
  const {imageList, onClickThumbnail, activeThumbnail} = props
  const {imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = imageList

  const onCickImage = () => {
    onClickThumbnail(imageList)
  }

  const classNameListItems =
    activeThumbnail === imageUrl
      ? 'thumbnail-image '
      : 'thumbnail-image thumbnail-image-unselected'

  return (
    <li className={classNameListItems}>
      <button className="btn">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-image"
          onClick={onCickImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItems
