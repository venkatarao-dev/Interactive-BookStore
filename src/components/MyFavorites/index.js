import { Component } from "react";
import BookStoreContext from "../../context/BookStoreContext";
import EmptyFavoritesView from "../EmptyFavoritesView";
import FavoriteItem from "../FavoriteItem";

import Header from "../Header";
import "./index.css";

class MyFavorites extends Component {
  render() {
    return (
      <BookStoreContext.Consumer>
        {(value) => {
          const { favoritesList, removeAllFavorites, isDarkTheme } = value;
          const favoriteListLength = favoritesList.length;
          const showEmptyView = favoritesList.length === 0;
          const bookText = favoritesList.length === 1 ? "book" : "books";

          const favoriteDarkThemeHeading = isDarkTheme
            ? "favorites-heading-dark-theme"
            : "";

          const onClickRemoveBtn = () => {
            removeAllFavorites();
          };

          return (
            <>
              <Header />
              <div className="favorites-container">
                {showEmptyView ? (
                  <EmptyFavoritesView />
                ) : (
                  <div className="favorites-content-container">
                    <h1
                      className={`favorites-heading ${favoriteDarkThemeHeading}`}
                    >
                      My Favorites
                    </h1>
                    <button
                      className="remove-all-btn"
                      type="button"
                      onClick={onClickRemoveBtn}
                    >
                      Remove {favoriteListLength} {bookText}
                    </button>
                    <ul className="favorites-list">
                      {favoritesList.map((eachItem) => (
                        <FavoriteItem
                          key={eachItem.id}
                          favoriteBookDetails={eachItem}
                        />
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          );
        }}
      </BookStoreContext.Consumer>
    );
  }
}
export default MyFavorites;
