import { isAuthenticated } from "../auth";
import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
class userDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaves: [],
      showBtns: true,
    };
    this.approve = this.approve.bind(this);
    this.reject = this.reject.bind(this);
  }

  componentDidMount() {
    if (localStorage.leaves) {
      this.setState({ leaves: JSON.parse(localStorage.leaves) });
    }
  }

  approve = () => {
    this.state.leaves.map(i => {
      i.status.map(k => {
        k.Applied = false;
      });
    });

    localStorage.setItem("leaves", JSON.stringify(this.state.leaves));

    this.setState({ showBtns: false });
  };

  reject = () => {
    this.setState({ showBtns: false });
  };

  render() {
    const { leaves } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row">
            <div className="col-3">
              <div className="card">
                <h4 className="card-header" style={{ textAlign: "center" }}>
                  Admin
                </h4>
              </div>
            </div>
            <div className="col-9">
              <div className="card mb-5">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group">
                  <li className="list-group-item">{isAuthenticated().name}</li>
                  <li className="list-group-item">{isAuthenticated().email}</li>
                  <li className="list-group-item">
                    {isAuthenticated().posistion}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container col-9">
          <h4>Leave Application List</h4>
          <div className="card">
            <div className="card-body" style={{ textAlign: "center" }}>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                {leaves.map(i => (
                  <tbody>
                    <tr>
                      <th scope="row">{i.name}</th>
                      <td>{i.date}</td>
                      <td>{i.reason}</td>
                      {i.status &&
                        i.status.map(i => (
                          <td>{i.Applied ? "Applied" : "Approved"}</td>
                        ))}
                      {i.status &&
                        i.status.map(i => (
                          <td>
                            {i.Applied && this.state.showBtns ? (
                              <button
                                className="btn btn-success"
                                onClick={this.approve}
                              >
                                Approve
                              </button>
                            ) : null}
                            {i.Applied && this.state.showBtns ? (
                              <button
                                className="btn btn-danger"
                                onClick={this.reject}
                                style={{ marginLeft: "5px" }}
                              >
                                Reject
                              </button>
                            ) : null}
                          </td>
                        ))}
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
        {console.log(this.state)}
      </div>
    );
  }
}
export default userDashboard;
