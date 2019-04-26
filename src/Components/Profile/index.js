import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/index";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const formatAMPM = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12; // the hour '0' should be '12'

  minutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + minutes + " " + ampm;
};

const formatTimeS = ts => {
  let date = new Date(ts);
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  let datestr = day + " " + monthNames[monthIndex] + " " + year;
  let time = formatAMPM(date);

  return datestr + " | " + time;
};

class Profile extends Component {
  async componentDidUpdate(prevProps, prevState) {
    console.log("TCL: Profile -> componentDidUpdate -> prevProps", prevProps);
    console.log("TCL: Profile -> componentDidUpdate -> prevProps", this.props);
    if (this.props.user != prevProps.user) {
      await this.props.getProfileDetail(this.props.user.user_id);
    }

    // if (prevProps.user !== this.props.user || !this.props.profile) {
    //   await this.props.getProfileDetail();

    //   console.log("this.props.profile:", this.props.profile);
    // }
  }
  // bitch i did what i said to do i
  render() {
    let { profile } = this.props;

    return (
      <div className="row">
        <div className="col-3 ">
          <div className="card align-items-center" style={{ height: "100%" }}>
            <img
              src={profile && this.props.profile.image}
              className="card-img-top"
              alt="user_pic"
            />
            <div className="card-body">
              <h5 className="card-title">{profile && profile.username}</h5>
              <p className="card-text">
                {profile && `${profile.first_name} ${profile.last_name}`}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {profile && `${profile.email}`}
              </li>
              {/* <li className="list-group-item">{profile}</li> */}
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>

            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      </div>
      // abt3ed ma abeak
      // {/* <div className="row">
      //   <div className="col-3 ">
      //     <div className="card align-items-center" style={{ height: "100%" }}>
      //       <img
      //         src={profile && this.props.profile.image}
      //         className="card-img-top "
      //         alt="user_pic"
      //       />

      //       <div className="card-body text-center">
      //         <h5 className="card-title">
      //           @{profile && profile.user.username}
      //         </h5>
      //         <p className="card-text text-center" style={{ color: "#a2a2a2" }}>
      //           {profile &&
      //             `${profile.user.first_name} ${profile.user.last_name}`}
      //         </p>
      //         <p className="card-text text-center" style={{ color: "#a2a2a2" }}>
      //           {profile && `${profile.user.email}`}
      //         </p>
      //         <div className="row justify-content-md-center my-5">
      //           <br />
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div> */}
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfileDetail: id => dispatch(actionCreators.fetchProfileDetail(id))
  };
};
const mapStateToProps = state => ({
  user: state.authenticationReducer.user,
  profile: state.profileReducer.profile
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
{
  /* <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div> */
}
