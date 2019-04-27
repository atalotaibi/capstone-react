import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";

// Fontawesome

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <Link to="/Home">
              <a className="navbar-brand" href="#">
                LookUp
                {/* <img
                    className="card-img-top"
                    src={linkedin_profile_image}
                    alt="hgh"
                    style={{ width: 350, height: 90 }}
                  /> */}
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* <div className="col-xl-8 col-lg-8  ">
              <Search history={this.props.history} />
            </div> */}
            <div className="col-xl-4 col-lg-4  float-right">
              <div className="user-panel">
                {this.props.user ? (
                  <div>
                    <div className="up-item ml-3">
                      <i class="fas fa-user-circle" />
                      <Link to="/profile">{this.props.user.username}</Link>
                    </div>
                    <div className="up-item ml-3">
                      <i class="fas fa-sign-out-alt" />
                      <Link onClick={() => this.props.logout()} to="Home">
                        Log Out
                      </Link>
                    </div>
                    <div className="up-item">
                      <div className="shopping-card">
                        <i className="flaticon-bag" />
                      </div>
                      <Link to="/QForm">Ask Question</Link>
                    </div>
                  </div>
                ) : (
                  <div className="navbar-nav ml-auto">
                    <div className="up-item ml-3">
                      <i
                        class="fas fa-user-plus"
                        style={{ color: "gray", marginLeft: 5 }}
                      />
                      <Link to="/Search">Search</Link>
                    </div>
                    <div className="up-item ml-3">
                      <i
                        class="fas fa-user-plus"
                        style={{ color: "gray", marginLeft: 5 }}
                      />
                      <Link to="/signup">Sign up</Link>
                    </div>
                    <div className="up-item ml-3">
                      <i
                        class="fas fa-sign-in-alt"
                        style={{ color: "gray", marginLeft: 5 }}
                      />
                      <Link to="/login">Sign In</Link>
                      {/* <li className="nav-item">
                        <a className="nav-link" href="#">
                          Services
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Contact
                        </a>
                      </li> */}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authenticationReducer.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
