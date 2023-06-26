import {AiFillCloseCircle} from 'react-icons/ai'

import {Link} from 'react-router-dom'

import './index.css'

import BookStoreContext from '../../context/BookStoreContext'

const CartItem = props => (
  <BookStoreContext.Consumer>
    {value => {
      const {removeCartItems, isDarkTheme} = value
      const {cartItemDetails} = props
      const {id, title, authorName, coverPic} = cartItemDetails

      const onClickRemove = () => {
        removeCartItems(id)
      }
      const darkThemeBg = isDarkTheme ? 'favorite-item-bg-dark-theme' : ''
      const darkThemeDescription = isDarkTheme
        ? 'favorite-item-dark-description'
        : ''

      const darkThemeTitle = isDarkTheme ? 'favorite-item-title' : ''

      const closeIconColor = isDarkTheme ? '#d3d3d3' : '#616e7c'
      return (
        <Link to={`/books/${id}`} className="favorite-book-item-nav-link">
          <li className={`favorite-item-bg ${darkThemeBg}`}>
            <img src={coverPic} alt={title} className="favorite-item-image" />
            <div className="favorite-item-details-container">
              <div className="favorite-item-title-author-container">
                <p className={`favorite-item-title ${darkThemeTitle}`}>
                  {title}
                </p>
                <p className={`favorite-item-author ${darkThemeDescription}`}>
                  by {authorName}
                </p>
              </div>
              <div className="total-price-remove-container">
                <button
                  type="button"
                  className={`remove-btn ${darkThemeDescription}`}
                  onClick={onClickRemove}
                >
                  Remove
                </button>
              </div>
            </div>
            <button
              className="delete-btn"
              type="button"
              onClick={onClickRemove}
            >
              <AiFillCloseCircle color={`${closeIconColor}`} size={20} />
            </button>
          </li>
        </Link>
      )
    }}
  </BookStoreContext.Consumer>
)
export default CartItem
