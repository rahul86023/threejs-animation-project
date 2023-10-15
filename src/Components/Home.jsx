import React from 'react';

function Home() {
  return (
    <><header id="home">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#mainNav" id="logoBrand">
            <span><i className="fab fa-buromobelexperte"></i></span> MyApp
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto pt-2">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#download">Download the App</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 pt-2">
              <input className="form-control mr-sm-2" type="email" placeholder="email" aria-label="email" />
              <input className="form-control mr-sm-2" type="password" placeholder="password" aria-label="password" />
              <button className="btn btn-outline-primary btn-sm my-2 my-sm-0" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>
      <div className="jumbotron text-center mt-5" id="mainHeader">
        <div className="container">
          {/* title */}
          <h1 className="display-3">Awesome App</h1>
          {/* subtitle */}
          <p className="lead">This is a fantastic app.</p>

          <hr className="my-4" />
          <p>Want to know more? Join our mailing list</p>

          {/* cta */}
          <div className="container-fluid">
            <form className="form-inline justify-content-center">
              <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Your Email</label>
              <div className="input-group mb-2 mr-sm-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">@</div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroupUsername2"
                  placeholder="Your Email" />
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </header><section id="about" className="p-5">
        <div className="container-fluid text-center">

          <div className="pb-5">
            <h3 className="display-4">Why this App is so awesome</h3>
            <p>This is why this app is so awesome, you'll never need another one!</p>
          </div>
          {/* cards */}
          <div className="row justify-content-center">
            {/* card 1 */}
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1464986411762-a4275fbaf3f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
                  className="card-img-top"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    <span>
                      <i className="fas fa-mobile"></i>
                    </span>
                    <br />
                    Card title
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1493500146995-7167488df174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
                  className="card-img-top"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    <span>
                      <i className="fas fa-mobile-alt"></i>
                    </span>
                    <br />
                    Card title
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  className="card-img-top"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                    <span>
                      <i className="fas fa-sms"></i>
                    </span>
                    <br />
                    Card title
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer id="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 pr-3 pl-3">
            <h5>Contact Us</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat molestiae numquam illum esse reiciendis
              cupiditate hic rerum, et unde. Voluptates rerum explicabo deleniti eos hic incidunt saepe tempore repellat
              dicta!
            </p>
          </div>
          <div className="col-sm-4 pr-3 pl-3">
            <h5>Privacy Settings</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat molestiae numquam illum esse reiciendis
              cupiditate hic rerum, et unde. Voluptates rerum explicabo deleniti eos hic incidunt saepe tempore repellat
              dicta!
            </p>
          </div>
          <div className="col-sm-4 pr-3 pl-3">
            <h5>Follow us</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <ul className="social">
              <li>
                <a href="#"><i className="fab fa-facebook-square"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-twitter-square"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </li>
              <li>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="container-fluid text-center">
          <p className="small">©2019, No rights reserved</p>
        </div>
      </div>
    </footer>
      
      
      </>
    
  );
}

export default Home;
