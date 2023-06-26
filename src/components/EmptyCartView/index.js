import {Link} from 'react-router-dom'
import BookStoreContext from '../../context/BookStoreContext'
import './index.css'

const EmptyCartView = () => (
  <BookStoreContext.Consumer>
    {value => {
      const {isDarkTheme, updateActiveNavId} = value
      const darkThemeEmptyCartViewHeading = isDarkTheme
        ? 'cart-empty-heading-dark-theme'
        : null

      const onClickFindBooks = () => {
        updateActiveNavId(2)
      }

      return (
        <div className="cart-empty-view-container">
          <img
            src="https://res.cloudinary.com/djei2g5qx/image/upload/v1687724836/empty_cart_ygfiqy.jpg"
            alt="cart empty"
            className="cart-empty-img"
          />
          <p className={`cart-empty-heading ${darkThemeEmptyCartViewHeading}`}>
            No Books In Your Cart.
          </p>
          <Link to="/shelf">
            <button
              className="empty-view-find-books-btn"
              type="button"
              onClick={onClickFindBooks}
            >
              Find Books
            </button>
          </Link>
        </div>
      )
    }}
  </BookStoreContext.Consumer>
)

export default EmptyCartView
