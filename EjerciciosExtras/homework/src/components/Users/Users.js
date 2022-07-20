import React, { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUsers } from "../../actions/index";
import "./Users.css";

export class Users extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    console.log(this.props.users);
    return (
      <div className="details">
        <h4 className="title">Usuarios del blog</h4>
        {this.props.users?.map((user) => {
          return (
            <table key={user.id}>
              <thead>
                <tr className="header">
                  <th>{user.name}</th>
                  <th>{user.email}</th>
                  <th>{user.username}</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          );
        })}
      </div>
    );
  }
}

export const mapStateToProps = function (state) {
  return { users: state.users };
};

export const mapDispatchToProps = function (dispatch) {
  return { getAllUsers: () => dispatch(getAllUsers()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);


