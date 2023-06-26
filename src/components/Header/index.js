import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillCloseCircle} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiSun, HiMoon} from 'react-icons/hi'
import NavItem from '../NavItem'
import BookStoreContext from '../../context/BookStoreContext'
import './index.css'

const navItems = [
  {
    id: 1,
    displayText: 'Home',
    pathText: '',
  },
  {
    id: 2,
    displayText: 'Bookshelves',
    pathText: 'shelf',
  },
  {
    id: 3,
    displayText: 'Favorites',
    pathText: 'favorites',
  },
  {
    id: 4,
    displayText: 'Cart',
    pathText: 'cart',
  },
]

const Header = () => {
  const navigate = useNavigate()

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  const renderMobileNavIconsContainer = () => (
    <BookStoreContext.Consumer>
      {value => {
        const {updateActiveNavId, onClose, isDarkTheme, onToggleTheme} = value
        const darkThemeCloseColor = isDarkTheme ? '#ffffff' : '#000000'
        const darkThemeMobileNav = isDarkTheme
          ? 'dark-mobile-theme-nav-menu'
          : ''
        const navIcon = isDarkTheme ? (
          <HiSun size={25} color="#ffffff" />
        ) : (
          <HiMoon size={25} color="#64748b" />
        )
        const onChangeTheme = () => {
          onToggleTheme()
        }
        return (
          <div className={`nav-menu-mobile ${darkThemeMobileNav}`}>
            <ul className="nav-menu-list-mobile">
              {navItems.map(eachItem => (
                <NavItem
                  key={eachItem.id}
                  navItemDetails={eachItem}
                  updateActiveNavId={updateActiveNavId}
                />
              ))}
              <button
                type="button"
                className="logout-btn"
                onClick={onClickLogout}
              >
                Logout
              </button>
              <button
                className="theme-button"
                type="button"
                onClick={onChangeTheme}
              >
                {navIcon}
              </button>
              <button className="close-button" type="button" onClick={onClose}>
                <AiFillCloseCircle size={25} color={darkThemeCloseColor} />
              </button>
            </ul>
          </div>
        )
      }}
    </BookStoreContext.Consumer>
  )

  const renderDesktopNavMenu = () => (
    <BookStoreContext.Consumer>
      {value => {
        const {updateActiveNavId, isDarkTheme, onToggleTheme} = value
        const onClickWebsiteLogo = () => updateActiveNavId(navItems[0].id)
        const navIcon = isDarkTheme ? (
          <HiSun size={25} color="#ffffff" />
        ) : (
          <HiMoon size={25} color="#64748b" />
        )
        const onChangeTheme = () => {
          onToggleTheme()
        }
        return (
          <div className="nav-bar-large-container">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/djei2g5qx/image/upload/v1687706893/bookstore_gou2o0.jpg"
                alt="website logo"
                className="website-logo"
                onClick={onClickWebsiteLogo}
              />
            </Link>
            <ul className="nav-menu">
              {navItems.map(eachItem => (
                <NavItem
                  key={eachItem.id}
                  navItemDetails={eachItem}
                  updateActiveNavId={updateActiveNavId}
                />
              ))}
            </ul>
            <button
              type="button"
              className="logout-btn"
              onClick={onClickLogout}
            >
              Logout
            </button>
            <button
              className="theme-button"
              type="button"
              onClick={onChangeTheme}
            >
              {navIcon}
            </button>
          </div>
        )
      }}
    </BookStoreContext.Consumer>
  )

  return (
    <BookStoreContext.Consumer>
      {value => {
        const {
          showNavIcons,
          updateActiveNavId,
          onToggleIcon,
          isDarkTheme,
        } = value
        const onClickWebsiteLogo = () => updateActiveNavId(navItems[0].id)
        const headerDarkThemeBg = isDarkTheme ? 'header-dark-theme-bg' : ''
        const hamburgerThemeDark = isDarkTheme ? '#ffffff' : '#000000'
        return (
          <div className={`nav-header ${headerDarkThemeBg}`}>
            <div className="nav-content">
              <div className="navbar-mobile-logo-container">
                <Link to="/">
                  <img
                    src="https://res.cloudinary.com/djei2g5qx/image/upload/v1687706893/bookstore_gou2o0.jpg"
                    alt="website logo"
                    className="website-logo"
                    onClick={onClickWebsiteLogo}
                  />
                </Link>
                <button
                  className="nav-mobile-button"
                  type="button"
                  onClick={onToggleIcon}
                >
                  <GiHamburgerMenu color={hamburgerThemeDark} size={25} />
                </button>
              </div>
              {renderDesktopNavMenu()}
            </div>
            {showNavIcons && renderMobileNavIconsContainer()}
          </div>
        )
      }}
    </BookStoreContext.Consumer>
  )
}

export default Header
