import React from 'react';

const Content = () =>{
  return(
    <main>

    <div id="points">
      <div  className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>What can you do?</h2>
          </div>
        </div>
        <div className="row">

          <div className="col-md-4 col-sm-12">

            <div className="point">
                <div className="top">
                  <h4>
                    <i className="fa fa-soundcloud fa-2x" aria-hidden="true"></i>
                    <span>Listen</span>
                  </h4>
                </div>

                <div className="bottom">
                    <p className="lead">
                      Do you know how many characters there are in the Simpsons Morty? There's like a-a billion characters,
                      M-Morty. There was an episode where Former President BUSH was their neighbor! Aw, geez.
                    </p>
                </div>

            </div>

          </div>
          <div className="col-md-4 col-sm-12">

            <div className="point">
                <div className="top">
                  <h4>
                    <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                    <span>Discover</span>
                  </h4>
                </div>

                <div className="bottom">
                    <p className="lead">
                      Do you know how many characters there are in the Simpsons Morty? There's like a-a billion characters,
                      M-Morty. There was an episode where Former President BUSH was their neighbor! Aw, geez.
                    </p>
                </div>

            </div>
          </div>
          <div className="col-md-4 col-sm-12">

            <div className="point">
                <div className="top">
                  <h4>
                    <i className="fa fa-share fa-2x" aria-hidden="true"></i>
                    <span>Share</span>
                  </h4>
                </div>

                <div className="bottom">
                    <p className="lead">
                      Do you know how many characters there are in the Simpsons Morty? There's like a-a billion characters,
                      M-Morty. There was an episode where Former President BUSH was their neighbor! Aw, geez.
                    </p>
                </div>

            </div>
          </div>
        </div>
       </div>
       <div  className="container">
         <div className="row">
           <div className="col-sm-12">
             <h2>Coming Soon...</h2>
           </div>
         </div>
         <div className="row">

           <div className="col-md-6 col-sm-12">

             <div className="point">
                 <div className="top">
                   <h4>
                     <i className="fa fa-list fa-2x" aria-hidden="true"></i>
                     <span>Playlists</span>
                   </h4>
                 </div>
                 <div className="bottom">
                     <p className="lead">
                       Do you know how many characters there are in the Simpsons Morty? There's like a-a billion characters,
                       M-Morty. There was an episode where Former President BUSH was their neighbor! Aw, geez.
                     </p>
                 </div>
             </div>
           </div>
           <div className="col-md-6 col-sm-12">
             <div className="point">
                 <div className="top">
                   <h4>
                     <i className="fa fa-download fa-2x" aria-hidden="true"></i>
                     <span>Downloads</span>
                   </h4>
                 </div>
                 <div className="bottom">
                     <p className="lead">
                       Do you know how many characters there are in the Simpsons Morty? There's like a-a billion characters,
                       M-Morty. There was an episode where Former President BUSH was their neighbor! Aw, geez.
                     </p>
                 </div>
             </div>
           </div>
         </div>
        </div>
      </div>



      <div id="parallax">
        <div className="p-wrap">
          <h3 className="text-center">
            I don't know how many times I have to say this, but if you have the flu, stay home.
          </h3>
          <br />
          <a href="" className="btn">Go to SoundCloud</a>
        </div>
      </div>

      <div id="callTo">
        <h3>Reach out !</h3>
        <p className="lead">Like this app? Or need a website or app developed?</p>
        <a className="btn">Contact Me</a>
      </div>

    </main>
  )
}
export default Content;
