import React from 'react';

const Footer = () =>{
  return(
    <footer className="text-center song-playing">
      <img className="logo" src="http://antfreda.com/img/logo.png" alt="anthony freda logo" />
      <h5>Designed &amp; Developed by <a href="http://antfreda.com">Anthony Freda</a></h5>
      <div className="social">
															<a href="https://www.linkedin.com/in/antfreda323">
		            <i className="fa fa-3x fa-linkedin" aria-hidden="true"></i>
		        </a>
											<a href="https://www.instagram.com/anthonyfreda_/">
		            <i className="fa fa-3x fa-instagram" aria-hidden="true"></i>
		        </a>
											<a href="http://codepen.io/afreda323/">
		            <i className="fa fa-3x fa-codepen" aria-hidden="true"></i>
		        </a>
											<a href="https://github.com/Afreda323?tab=repositories">
		            <i className="fa fa-3x fa-github" aria-hidden="true"></i>
		        </a>
					      </div>
      <p className="copy">
          &copy; {new Date().getFullYear()} Anthony Freda
      </p>
  </footer>
  )
}
export default Footer;
