import {Component} from 'react'
import {Route, Navigate, Routes} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'

import Bookshelves from './components/Bookshelves'

import BookItemDetails from './components/BookItemDetails'

import Cart from './components/Cart'

import NotFound from './components/NotFound'
import MyFavorites from './components/MyFavorites'
import BookStoreContext from './context/BookStoreContext'

import './App.css'

class App extends Component {
  state = {
    activeNavId: '',
    favoritesList: [],
    cartItemList: [],
    showNavIcons: false,
    isDarkTheme: false,
  }

  updateActiveNavId = navId => {
    this.setState({activeNavId: navId})
  }

  onToggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onToggleIcon = () => {
    this.setState(prevState => ({showNavIcons: !prevState.showNavIcons}))
  }

  onClose = () => {
    this.setState({showNavIcons: false})
  }

  removeAllFavorites = () => {
    this.setState({favoritesList: []})
    localStorage.setItem('favorites_list', [])
  }

  removeAllCartItems = () => {
    this.setState({cartItemList: []})
    localStorage.setItem('cartItem_list', [])
  }

  addFavorites = book => {
    const {favoritesList} = this.state
    const bookObject = favoritesList.find(eachBook => eachBook.id === book.id)
    if (bookObject === undefined) {
      this.setState(prevState => ({
        favoritesList: [...prevState.favoritesList, book],
      }))
    }
  }

  addCartItems = book => {
    const {cartItemList} = this.state
    const bookObject = cartItemList.find(eachBook => eachBook.id === book.id)
    if (bookObject === undefined) {
      this.setState(prevState => ({
        cartItemList: [...prevState.cartItemList, book],
      }))
    }
  }

  removeFavorites = id => {
    const {favoritesList} = this.state
    const filteredFavoritesList = favoritesList.filter(
      eachBook => eachBook.id !== id,
    )
    this.setState({favoritesList: filteredFavoritesList})
  }

  removeCartItems = id => {
    const {cartItemList} = this.state
    const filteredCartItemList = cartItemList.filter(
      eachBook => eachBook.id !== id,
    )
    this.setState({cartItemList: filteredCartItemList})
  }

  render() {
    const {
      activeNavId,
      favoritesList,
      showNavIcons,
      isDarkTheme,
      cartItemList,
    } = this.state
    const appTheme = isDarkTheme ? 'dark-theme' : 'light-theme'
    return (
      <BookStoreContext.Provider
        value={{
          showNavIcons,
          activeNavId,
          updateActiveNavId: this.updateActiveNavId,
          onToggleIcon: this.onToggleIcon,
          onClose: this.onClose,
          isDarkTheme,
          onToggleTheme: this.onToggleTheme,
          favoritesList,
          cartItemList,
          removeAllFavorites: this.removeAllFavorites,
          removeAllCartItems: this.removeAllCartItems,
          removeFavorites: this.removeFavorites,
          removeCartItems: this.removeCartItems,
          addFavorites: this.addFavorites,
          addCartItems: this.addCartItems,
        }}
      >
        <div className={`app-container ${appTheme}`}>
          <Routes>
            <Route exact path="/login" element={<LoginForm />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shelf" element={<Bookshelves />} />
            <Route exact path="/books/:id" element={<BookItemDetails />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/favorites" element={<MyFavorites />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/not-found" element={<Navigate to="/not-found" />} />
          </Routes>
        </div>
      </BookStoreContext.Provider>
    )
  }
}

export default App
