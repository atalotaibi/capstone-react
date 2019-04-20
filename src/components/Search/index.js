import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";

class Search extends Component {
  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            onChange={event => this.props.filterQuestions(event.target.value)}
          />
          <div className="input-group-append">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterQuestions: query => dispatch(actionCreators.filterQuestions(query))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Search);

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import * as actionCreators from "../../store/actions";
// import SearchBar from "./SearchBar";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

// import Qlist from "../Qlist";

// class index extends Component {
//   componentDidMount() {
//     this.props.filterQuestions();
//   }
//   render() {
//     const Qlist = this.props.questions.map(question => (
//       <Link to="/question/list" className="text-secondary">
//         <Qlist key={question.id} />
//       </Link>
//     ));
//     return (
//       <div>
//         <form className="header-section">
//           <div className="header-top">
//             <div className="container">
//               <div className="row col-xl-12 col-lg-12">
//                 <div className="col-xl-8 col-lg-8  ">
//                   <SearchBar
//                     Qlist={this.props.Qlist}
//                     onSearch={this.handleChange}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             style={{
//               backgroundImage: "url(img/simple2.gif)",

//               backgroundRepeat: "no-repeat",
//               height: "450px"
//             }}
//             className="text-center col-12"
//           />
//         </form>
//       </div>
//     );
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     questions: () => dispatch(actionCreators.filterQuestions()),
//     filterQuestions: query => dispatch(actionCreators.filterQuestions(query))
//   };
// };
// const mapStateToProps = state => {
//   return {
//     questions: state.questions.questions
//   };
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(index);
