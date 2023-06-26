import {useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import Cookies from 'js-cookie'
import {BsFillStarFill} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import './index.css'
import {TailSpin} from 'react-loader-spinner'
import Header from '../Header'
import Footer from '../Footer'
import BookStoreContext from '../../context/BookStoreContext'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const BookItemDetails = () => {
  const [bookData, setBookData] = useState({})
  const [apiStatus, setApiStatus] = useState(apiStatusConstant.initial)
  const [isFavoriteBook, setIsFavoriteBook] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const {id} = useParams()
  const {
    isDarkTheme,
    removeFavorites,
    addFavorites,
    favoritesList,
    cartItemList,
    removeCartItems,
    addCartItems,
  } = useContext(BookStoreContext)

  useEffect(() => {
    getBookData()
  }, [])

  const getFormattedData = data => ({
    id: data.id,
    authorName: data.author_name,
    coverPic: data.cover_pic,
    aboutAuthor: data.about_author,
    aboutBook: data.about_book,
    rating: data.rating,
    readStatus: data.read_status,
    title: data.title,
  })

  const getBookData = async () => {
    setApiStatus(apiStatusConstant.inProgress)

    const jwtToken = Cookies.get('jwt_token')
    const bookApiUrl = `https://apis.ccbp.in/book-hub/books/${id}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    try {
      const response = await fetch(bookApiUrl, options)
      if (response.ok === true) {
        const fetchedData = await response.json()
        const updatedData = getFormattedData(fetchedData.book_details)

        setBookData(updatedData)
        setApiStatus(apiStatusConstant.success)
      } else {
        setApiStatus(apiStatusConstant.failure)
      }
    } catch (error) {
      setApiStatus(apiStatusConstant.failure)
    }
  }

  const onClickFavoriteIcon = () => {
    const bookObject = favoritesList.find(eachBook => eachBook.id === id)
    const isFavorite = bookObject !== undefined

    isFavorite
      ? removeFavorites(id)
      : addFavorites({...bookData, isFavorite: true})
    setIsFavoriteBook(!isFavoriteBook)
  }

  const onClickAddCartBtn = () => {
    const cartObject = cartItemList.find(eachItem => eachItem.id === id)
    const addedToCart = cartObject !== undefined

    addedToCart
      ? removeCartItems(id)
      : addCartItems({...bookData, addedToCart: true})
    setIsAddedToCart(!isAddedToCart)
  }

  const renderSuccessView = () => {
    const {
      authorName,
      aboutBook,
      title,
      rating,
      aboutAuthor,
      readStatus,
      coverPic,
    } = bookData

    const darkThemeHeading = isDarkTheme ? 'book-details-heading-dark' : ''
    const darkThemeDescription = isDarkTheme
      ? 'book-details-description-dark'
      : ''
    const darkColor = isDarkTheme ? '#d3d3d3' : '#475569'
    const bookObject = favoritesList.find(eachBook => eachBook.id === id)
    const isFavorite = bookObject !== undefined

    const favoriteIcon = isFavorite ? (
      <AiFillHeart size={25} color="#ff0b37" />
    ) : (
      <AiFillHeart size={25} color={darkColor} />
    )

    return (
      <div className={`details-container ${isDarkTheme ? 'dark-theme' : ''}`}>
        <div className="details-header">
          <Header />
        </div>
        <div className="details-content">
          <img className="book-cover" src={coverPic} alt={title} />
          <div className="book-details">
            <h1 className={`book-details-heading ${darkThemeHeading}`}>
              {title}
            </h1>
            <h1 className={`book-details-rating ${darkThemeHeading}`}>
              <BsFillStarFill color="#ffd700" /> {rating}
            </h1>
            <p className={`book-details-description ${darkThemeDescription}`}>
              {aboutBook}
            </p>
            <h1 className={`book-details-author ${darkThemeHeading}`}>
              {authorName}
            </h1>
            <h1 className={`book-details-heading ${darkThemeHeading}`}>
              About the Author
            </h1>
            <p className={`book-details-description ${darkThemeDescription}`}>
              {aboutAuthor}
            </p>
            <div className="book-details-actions">
              <button
                type="button"
                className={`favorite-icon-button ${
                  isDarkTheme ? 'dark-theme-favorite' : ''
                }`}
                onClick={onClickFavoriteIcon}
              >
                {favoriteIcon}
              </button>
              <p
                className={`book-details-read-status ${darkThemeDescription} ${
                  readStatus ? 'read-status' : ''
                }`}
              >
                {readStatus ? 'Read' : 'Yet to read'}
              </p>
              <button
                type="button"
                className={`add-cart-button ${
                  isDarkTheme ? 'dark-theme-add-cart-btn' : ''
                }`}
                onClick={onClickAddCartBtn}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="details-footer">
          <Footer />
        </div>
      </div>
    )
  }

  const renderFailureView = () => (
    <div className={`failure-view ${isDarkTheme ? 'dark-theme' : ''}`}>
      <Header />
      <div className="failure-container">
        <img
          src="https://res.cloudinary.com/dt1l3pjk4/image/upload/v1674833099/Group_7522_nby7ef.png"
          alt="failure view"
          className="book-details-failure-img"
        />
        <h1 className="failure-text">Failed to fetch book details!</h1>
        <p className="failure-text">
          We apologize for the inconvenience. Please try again later.
        </p>
      </div>
      <Footer />
    </div>
  )

  const renderLoader = () => (
    <div className={`loader-container ${isDarkTheme ? 'dark-theme' : ''}`}>
      <TailSpin color="#1f2937" height={50} width={50} />
    </div>
  )

  const renderView = () => {
    switch (apiStatus) {
      case apiStatusConstant.success:
        return renderSuccessView()
      case apiStatusConstant.failure:
        return renderFailureView()
      case apiStatusConstant.inProgress:
        return renderLoader()
      default:
        return null
    }
  }

  return renderView()
}

export default BookItemDetails
