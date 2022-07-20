import React from "react";
import { connect } from "react-redux";
import { getAllUserPosts } from "../../actions";
import "./UserPosts.css";

export class UserPosts extends React.Component {
  render() {
    const userid = this.props.match.params.id;
    // despachar una accion para traerme esa info
    // getAllUserPosts(userid) <--- ¿?
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {/*userid*/}</h4>
      </div>
    );
  }
}

export const mapStateToProps = function (state) {
  return { userPosts: state.userPosts };
};

export const mapDispatchToProps = function (dispatch) {
  return { getAllUserPosts: (id) => dispatch(getAllUserPosts(id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
