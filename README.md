
In this project let's build a Interactive Book Store by applying the concepts we have learned in reactjs. T

Created Book Store app that will fetch data from an internal server using a class component, displaying that data, using component lifecycle methods, routing concepts, authentication, and authorization, and adding responsiveness to the website.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Creating a real-world app involves lot of setup because a large number of components need to be organised.
Facebook has created a third-party package, create-react-app, to generate a ready-made React application setup.

Installation command to  installs create-react-app globally in our environment isgiven below 
  npm install -g create-react-app

 for creating the react application we use below command 
   create-react-app myapp --use-npm


#### React Application Folder Structure:

public/folder: Where we will keep assets like images, icons, videos etc
src/folder: Where we will do the majority of our work. All of our React components will placed here.
node_modules
package-lock.json
node_modules:

This directory contains dependencies and sub-dependencies of packages used by the current react app, as specified by package.json.

package-lock.json:

This file contains the exact dependency tree installed in node_modules. This provides a way to ensure every team member have the same version of dependencies and sub-dependencies.

The index.js in the path src/folder/ is a starting point to the application. App.js, App.css are imported in this file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Set Up Instructions

Download dependencies by running npm install
Start up the app using npm start


### functionally added 

Functionality  added in the app

The app have the following functionalities

### note 
(used react-router-dom version 6)

### Login Route

When the invalid username and password are provided and the Login button is clicked, then the respective error message received from the response should be displayed
When the valid username and password are provided and the Login button is clicked, then the page should be navigated to the Home Route
When an unauthenticated user tries to access the Home, Bookshelves and Book Details Route, then the page should be navigated to the Login Route
When an authenticated user tries to access the Home, Bookshelves and Book Details Route, then the page should be navigated to the respective route
When an authenticated user tries to access the Login Route, then the page should be navigated to the Home Route

### Home Route

When an authenticated user opens the Home Route,

An HTTP GET request should be made to Top Rated Books API URL with jwt_token in the Cookies

Loader should be displayed while fetching the data (used react-loader-spinner third party package)
After the data is fetched successfully, display the list of top rated books received from the response
If the HTTP GET request made is unsuccessful, then the failure view given in the Figma screens should be displayed

When the Try Again button is clicked, an HTTP GET request should be made to Top Rated Books API URL
When the Find Books button is clicked, then the page should be navigated to the Bookshelves Route
When a book item is clicked, then the page should be navigated to the Book Details Route

### Header  

When the Book Hub logo in the header is clicked, then the page should be navigated to the Home Route
When the Home link in the header is clicked, then the page should be navigated to the Home Route
When the Bookshelves link in the header is clicked, then the page should be navigated to the Bookshelves Route
When the Logout button in the header is clicked, then the page should be navigated to the Login Route

### Bookshelves Route

When an authenticated user opens the Bookshelves Route

An HTTP GET request should be made to Books API URL with jwt_token in the Cookies and query parameters shelf and search with initial values as ALL and empty string respectively

The page should initially consist of All Books heading
Loader should be displayed while fetching the data
After the data is fetched successfully, display the list of books received from the response
If the HTTP GET request made is unsuccessful, then the failure view given in the Figma screens should be displayed

When the Try Again button is clicked, an HTTP GET request should be made to Books API URL
When a button in the bookshelves is clicked (Use the bookshelvesList data provided in the App.js to render Bookshelves),

The All Books heading changed to {bookshelf name} Books. Here the bookshelf name refers to the clicked bookshelf label from the provided bookshelvesList
Make an HTTP GET request to the Books API URL with jwt_token in the Cookies and query parameter shelf with value as the value of the clicked bookshelf from the provided bookshelvesList
Loader should be displayed while fetching the data (used react-loader-spinner third party package)
After the data is fetched successfully, display the list of books received from the response
When a non-empty value is provided in the search input and the search icon button is clicked

Make an HTTP GET request to the Books API URL with jwt_token in the Cookies and query parameter search with value as the text provided in the search input
Loader should be displayed while fetching the data
After the data is fetched successfully, display the list of books received from the response
When the HTTP GET request made to the Books API URL returns an empty list for books, then the No Books View should be displayed.

When multiple filters are applied, then the HTTP GET request should be made with all the filters that are applied

For example: When the Read bookshelf is clicked and search input value is Speak, then the Books API URL will be as follows
  const apiUrl = 'https://apis.ccbp.in/book-hub/books?shelf=READ&search=Speak'

When a book item is clicked, then the page should be navigated to the Book Details Route
All the header functionalities mentioned in the Home Route should work in this route accordingly

### Book Details Route

When an authenticated user opens the Book Details Route

An HTTP GET request should be made to Book Details API URL with jwt_token in the Cookies and book id as path parameter
Loader should be displayed while fetching the data
After the data is fetched successfully, book details received from the response should be displayed
If the HTTP GET request made is unsuccessful, then the failure view given in the Figma screens should be displayed
When the Try Again button is clicked, an HTTP GET request should be made to Book Details API URL
All the header functionalities mentioned in the Home Route should work in this route accordingly

### Not Found Route

When a random path is provided as the URL path, then the page should be navigated to the Not Found Route
Users should be able to view the website responsively in mobile view, tablet view as well

The App is provided with bookshelvesList. It consists of a list of bookshelf objects with the following properties in each bookshelf object id (string) ,value(string, label(string).

### Third aprty packages 
Third party packages to be used to achieve the design or functionality

1.React Slick
2.React Slick Carousel
3.React loader spinner 
4.react-router-dom(v6)
5.js-cookie (to pass jwt token)
6.react icons (for different icons)

### Resources
### Data fetch URLs
Note: Use the below sample code snippet to make a POST request on Login using valid username and password.
        const options = {
                method: 'POST',
                body: JSON.stringify(userDetails),
        }

## Login API

URL: https://apis.ccbp.in/login
Method: POST
Description:
Returns a response based on the credentials provided 

### Top Rated Books API

URL: https://apis.ccbp.in/book-hub/top-rated-books
Method: GET
Description:
Returns a response containing the list of 10 top rated books

### Books API

URL: https://apis.ccbp.in/book-hub/books?shelf={bookshelfName}&search={searchText}
Example: https://apis.ccbp.in/book-hub/books?shelf=Read&search=Luke
Method: GET
Description:
Returns a response containing the list of books based on the query parameters

### Book Details API

URL: https://apis.ccbp.in/book-hub/books/{bookId}
Example: https://apis.ccbp.in/book-hub/books/7850622e-1b70-4396-963d-e68d5a2577d7
Method: GET
Description:
Returns a response containing book details

### User Credentials
we can you below user credentials 
  username: rahul
  password: rahul@2021
