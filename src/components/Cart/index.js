import {Component} from 'react'
import BookStoreContext from '../../context/BookStoreContext'
import EmptyCartView from '../EmptyCartView'

import CartItem from '../CartItem'

import Header from '../Header'
import './index.css'

class Cart extends Component {
  render() {
    return (
      <BookStoreContext.Consumer>
        {value => {
          const {cartItemList, removeAllCartItems, isDarkTheme} = value
          const cartListLength = cartItemList.length
          const showEmptyCartView = cartItemList.length === 0
          const itemText = cartItemList.length === 1 ? 'item' : 'items'

          const favoriteDarkThemeHeading = isDarkTheme
            ? 'favorites-heading-dark-theme'
            : ''

          const onClickRemoveBtn = () => {
            removeAllCartItems()
          }

          return (
            <>
              <Header />
              <div className="favorites-container">
                {showEmptyCartView ? (
                  <EmptyCartView />
                ) : (
                  <div className="favorites-content-container">
                    <h1
                      className={`favorites-heading ${favoriteDarkThemeHeading}`}
                    >
                      My Cart
                    </h1>
                    <button
                      className="remove-all-btn"
                      type="button"
                      onClick={onClickRemoveBtn}
                    >
                      Remove {cartListLength} {itemText}
                    </button>
                    <ul className="favorites-list">
                      {cartItemList.map(eachItem => (
                        <CartItem
                          key={eachItem.id}
                          cartItemDetails={eachItem}
                        />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )
        }}
      </BookStoreContext.Consumer>
    )
  }
}

export default Cart
