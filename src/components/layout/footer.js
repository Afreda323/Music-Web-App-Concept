import React from 'react';

const Footer = () =>{
  return(
    <footer className="text-center">
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-2'>
              <p className="lead">
                This application was made using the SoundCloud SDK as well as React.
                For documentation please refer to my Github account located at LINK.
                <br />
                Designed and developed by Anthony Freda
              </p>
            </div>
          </div>
        </div>
        <div className="foot">
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}
export default Footer;
