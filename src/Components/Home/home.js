import React, { Component } from "react";
import { from } from "react-redux";
import { connect } from "react-redux";
import Search from "../Search";
import Footer from "../Footer";
import linkedin_profile_image from "../../assets/images/linkedin_profile_image.png";
import Header from "../Header";

class Home extends Component {
  render() {
    return (
      <div>
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="description" content="" />
            <meta name="author" content="" />

            <title>Full Width Pics - Start Bootstrap Template</title>
            {/* <!-- Bootstrap core CSS --> */}

            <link
              href="vendor/bootstrap/css/bootstrap.min.css"
              rel="stylesheet"
            />

            {/* <!-- Custom styles for this template --> */}
            <link href="css/full-width-pics.css" rel="stylesheet" />
          </head>

          <header
            className="py-5 bg-image-full"
            style={{
              backgroundImage:
                "url(" +
                "https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766__480.jpg" +
                ")",
              width: "100%",
              height: "300%"
            }}
          >
            <div>
              <Search />
            </div>
          </header>

          <body>
            {/* <!-- Navigation --> */}
            {/* <Header /> */}
            {/* <!-- Header - set the background image for the header in the line below --> */}
            <div className="container my-11">
              <br />
              <div class="row">
                <div class="col-lg-4 col-sm-6 portfolio-item">
                  <div class="card h-100">
                    <a href="#">
                      <img
                        class="card-img-top"
                        src="http://static1.squarespace.com/static/583ed05c59cc68a8c3e45c0f/584331c3725e25d0d2a9f24c/5856a606f5e2315e3ef8b08a/1549242754691/vision.png?format=1500w"
                        alt=""
                      />
                    </a>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="#">Vision</a>
                      </h4>
                      <p class="card-text">Our Vision is to reach the sky.</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-6 portfolio-item">
                  <div class="card h-100">
                    <a href="#">
                      <img
                        class="card-img-top"
                        src="https://www.approach.be/en/images/mission_statement_approach-min9c1b.jpg"
                        alt=""
                      />
                    </a>
                    <br />
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="#">Mission</a>
                      </h4>
                      <p class="card-text">
                        Our mission is to create an education society between
                        all the students around the world.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-6 portfolio-item">
                  <div class="card h-100">
                    <a href="#">
                      <img
                        class="card-img-top"
                        src="http://chittagongit.com/images/black-search-icon-png/black-search-icon-png-26.jpg"
                        alt=""
                      />
                    </a>
                    <div class="card-body">
                      <h4 class="card-title">
                        <a href="#">How To Use ?</a>
                      </h4>
                      <p class="card-text" />
                    </div>
                  </div>
                </div>
              </div>
              <br />

              {/* <!-- Image Section - set the background image for the header in the line below --> */}
              <section
                className="py-5 bg-image-full"
                style={{
                  backgroundImage:
                    "url(" + "https://unsplash.it/1900/1080?image=1081" + ")"
                }}
              >
                {/* <!-- Put anything you want here! There is just a spacer below for demo purposes! --> */}
                <div style={{ height: 200 }} />
              </section>

              {/* <!-- Content section --> */}
              <section className="py-5">
                <div className="container">
                  <h1>We will add something</h1>
                  <p className="lead">Twaiq Bootcamp</p>
                  <p>This is just a pretty, elegant and simple example.</p>
                </div>
              </section>
            </div>

            {/* <!-- Bootstrap core JavaScript --> */}
            <script src="vendor/jquery/jquery.min.js" />
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js" />
          </body>
        </html>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps)(Home);
