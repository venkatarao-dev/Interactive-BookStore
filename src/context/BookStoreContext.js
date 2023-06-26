import React from 'react'

const BookStoreContext = React.createContext({
  activeNavId: '',
  updatedActiveNavId: () => {},
  showNavIcons: false,
  onToggleIcon: () => {},
  onClose: () => {},
  isDarkTheme: false,
  onToggleTheme: () => {},
  favoritesList: [],
  cartItemList: [],
  removeAllCartItems: () => {},
  removeAllFavorites: () => {},
  removeCartItems: () => {},
  removeFavorites: () => {},
  addFavorites: () => {},
  addCartItems: () => {},
})

export default BookStoreContext
