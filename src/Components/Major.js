import React, { Component } from "react";
import renderHTML from "react-render-html";
class Major extends Component {
  render() {
    const major = this.props.major;
    return (
      <option>major.id.name</option>

      // {/* <div>
      //   <div className="form-group col-lg-12 col-12 mx-auto">
      //     <div className="card w-100">
      //       <div className="card-body">
      //         <h4>{renderHTML(major.a_text)}</h4>
      //       </div>{" "}
      //     </div>
      //   </div>
      // </div> */}
    );
  }
}

export default Major;
