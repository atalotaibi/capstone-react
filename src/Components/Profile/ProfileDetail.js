// import React, { Component, PropTypes } from "react";
// import { connect } from "react-redux";
// import * as actionCreators from "../../store/actions";

// class ProfileDetail extends Component {
//   render() {
//     if (!this.props.user) {
//       this.props.push("signup");
//     }
//     return (
//       <div class="card" style="width: 18rem;">
//         <img src="..." class="card-img-top" alt="..." />
//         <div class="card-body">
//           {/* <h5 class="card-title">{user.username}</h5> */}
//           <p class="card-text">{this.props.fetchProfileDetail()}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">Cras justo odio</li>
//           <li class="list-group-item">Dapibus ac facilisis in</li>
//           <li class="list-group-item">Vestibulum at eros</li>
//         </ul>
//         <div class="card-body">
//           <a href="#" class="card-link">
//             Card link
//           </a>
//           <a href="#" class="card-link">
//             Another link
//           </a>
//         </div>
//       </div>
//       // {/* <Card style={{ width: "18rem" }}>
//       //   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//       //   <Card.Body>
//       //     <Card.Title>{user.username}</Card.Title>
//       //     <Card.Text>{this.props.fetchProfileDetail()}</Card.Text>
//       //   </Card.Body>
//       //   <ListGroup className="list-group-flush">

//       //     <ListGroupItem>Cras justo odio</ListGroupItem>
//       //     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//       //     <ListGroupItem>Vestibulum at eros</ListGroupItem>
//       //   </ListGroup>
//       //   <Card.Body>
//       //     <Card.Link href="#">Card Link</Card.Link>
//       //     <Card.Link href="#">Another Link</Card.Link>
//       //   </Card.Body>
//       // </Card> */}
//     );
//   }
// }

// // yfcthuuiiu
// //   render() {
// //     return (
// //       <View>
// //         <Text>{this.props.fetchProfileDetail()}</Text>
// //       </View>
// //     );
// //   }
// // }
// const mapDispatchToProps = dispatch => ({
//   fetchProfileDetail: (userData, history) =>
//     dispatch(actionCreators.login(userData, history))
// });
// const mapStateToProps = state => ({
//   user: state.authenticationReducer.user
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProfileDetail);
