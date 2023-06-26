import {
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

import BookStoreContext from "../../context/BookStoreContext";

import "./index.css";

const Footer = () => (
  <BookStoreContext.Consumer>
    {(value) => {
      const { isDarkTheme } = value;

      const footerDarkClassName = isDarkTheme ? "footer-dark-text" : null;

      return (
        <div className="footer-container">
          <div className="icons-container">
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-button"
            >
              <FaGoogle className={`footer-icon ${footerDarkClassName}`} />
            </a>
            <a
              href="https://twitter.com/login?lang=en/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-button"
            >
              <FaTwitter className={`footer-icon ${footerDarkClassName}`} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-button"
            >
              <FaInstagram className={`footer-icon ${footerDarkClassName}`} />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-button"
            >
              <FaYoutube className={`footer-icon ${footerDarkClassName}`} />
            </a>
            <a
              href="https://in.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon-button"
            >
              <FaLinkedin className={`footer-icon ${footerDarkClassName}`} />
            </a>
          </div>
          <p className={`contact-us-text ${footerDarkClassName}`}>Contact Us</p>
        </div>
      );
    }}
  </BookStoreContext.Consumer>
);

export default Footer;
