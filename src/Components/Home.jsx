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
          <h1 className="display-3"> Healthy Homes</h1>
          {/* subtitle */}
          <p className="lead">Healthier Homes Zero Waste</p>

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
            <h3 className="display-4">Our Services</h3>
            
          </div>
          {/* cards */}
          <div className="row justify-content-center">
            {/* card 1 */}
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="./texture1a.jpeg"
                  className="card-img-top"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                   
                    <br />
                    Healthy Homes
                  </h5>
                  <p className="card-text">
                  Auckland’s housing crisis can be solved by using existing homes wisely and sustainable design of new builds.
                  </p>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="./texture2a.jpeg"
                  className="card-img-top"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                   
                    <br />
                    Education
                  </h5>
                  <p className="card-text">
                  We facilitate environmental education for children and adults, and advice from technical experts.
                  </p>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="./texture3a.jpeg"
                  className="card-img-top"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                   
                    <br />
                    Community
                  </h5>
                  <p className="card-text">
                  We are an online community resource centre for schools, businesses and individuals wanting to make sustainable changes in their lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            {/* card 1 */}
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="./texture4a.jpeg"
                  className="card-img-top"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                   
                    <br />
                    Homefit: Healthy Home Assessments
                  </h5>
                  <p className="card-text">
                  Is your home healthy? Find out for sure with one of our impartial HomeFit Assessments
                  </p>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="./texture5a.jpeg"
                  className="card-img-top"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                   
                    <br />
                    Zero Waste
                  </h5>
                  <p className="card-text">
                  Right now, one of our biggest issues is waste. Sustain and Enable offers resources, workshops and educational programmes designed to help us all minimise and manage waste better.
                  </p>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="./texture6a.jpeg"
                  className="card-img-top"
                  alt="..." />
                <div className="card-body">
                  <h5 className="card-title">
                   
                    <br />
                    Low-Carbon Living
                  </h5>
                  <p className="card-text">
                  Sustainability is about making sure that the natural resources we use today are still available for future generations to use as well.
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
