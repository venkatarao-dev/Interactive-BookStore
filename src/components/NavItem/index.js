import { NavLink } from "react-router-dom";
import BookStoreContext from "../../context/BookStoreContext";

import "./index.css";

const NavItem = (props) => {
  const { navItemDetails, updateActiveNavId } = props;
  const { id, displayText, pathText } = navItemDetails;

  const onClickNavItem = () => {
    updateActiveNavId(id);
  };

  return (
    <BookStoreContext.Consumer>
      {(value) => {
        const { isDarkTheme } = value;
        const navLinkDarkThemeText = isDarkTheme
          ? "header-dark-theme-text"
          : "";
        return (
          <li className="nav-menu-item" onClick={onClickNavItem}>
            <NavLink
              exact
              to={`/${pathText}`}
              className={`nav-link ${navLinkDarkThemeText}`}
            >
              {displayText}
            </NavLink>
          </li>
        );
      }}
    </BookStoreContext.Consumer>
  );
};

export default NavItem;
