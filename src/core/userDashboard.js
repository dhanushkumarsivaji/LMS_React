import { isAuthenticated } from "../auth";
import React, { Component } from "react";
import Navbar from "./Navbar";
import { Modal } from "react-bootstrap";
import uuid from "uuid";
class userDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      holidays: [],
      reason: "reason",
      inputDate: "",
    };
    this.filter = this.filter.bind(this);
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = e => {
    e.preventDefault();
    var b = {
      name: isAuthenticated().name,
      id: uuid(),
      date: this.state.inputDate,
      reason: this.state.reason,
      status: [
        {
          Applied: true,
        },
      ],
    };
    this.setState({ holidays: [...this.state.holidays, b] });

    var check = [];

    check.push(b);

    console.log(check);
    localStorage.setItem("leaves", JSON.stringify(check));
  };

  filter = (id, e) => {
    this.setState({
      holidays: this.state.holidays.filter(remove => remove.id !== id),
    });
    var check = JSON.parse(localStorage.leaves);

    check.map(i => {
      if (i.id === id) {
        localStorage.removeItem("leaves");
      }
    });
  };

  componentDidMount() {
    if (localStorage.leaves) {
      this.setState({ holidays: JSON.parse(localStorage.leaves) });
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row">
            <div className="col-3">
              <div className="card">
                <h4 className="card-header" style={{ textAlign: "center" }}>
                  User
                </h4>

                <button
                  type="button"
                  className="btn btn-dark btn-sm"
                  onClick={this.handleShow}
                >
                  Apply leave
                </button>
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
                  <li className="list-group-item">
                    Total number of leaves left :{" "}
                    <span style={{ color: "red" }}>
                      {isAuthenticated().leaves}
                    </span>
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
                    <th scope="col">Date</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                {this.state.holidays &&
                  this.state.holidays.map(i => (
                    <tbody>
                      <tr>
                        <th scope="row">{i.date}</th>
                        <td>{i.reason}</td>
                        {i.status.map(k => (
                          <td>{k.Applied ? "Applied" : "Approved"}</td>
                        ))}
                        {i.status.map(k => (
                          <td>
                            {k.Applied ? (
                              <button
                                className="btn btn-danger"
                                onClick={this.filter.bind(this, i.id)}
                              >
                                Cancel
                              </button>
                            ) : null}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  ))}
              </table>
              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Apply Leave</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form onSubmit={this.submit}>
                    <div class="form-row align-items-center">
                      <div class="col-auto my-1">
                        <div class="custom-control custom-checkbox mr-sm-2">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Date"
                            value={this.state.inputDate}
                            onChange={this.handleChange}
                            name="inputDate"
                          />
                        </div>
                      </div>
                      <div class="col-auto my-1">
                        <label
                          class="mr-sm-2 sr-only"
                          for="inlineFormCustomSelect"
                        >
                          Preference
                        </label>
                        <select
                          class="custom-select mr-sm-2"
                          id="inlineFormCustomSelect"
                          onChange={this.handleChange}
                          value={this.state.reason}
                          name="reason"
                        >
                          <option value="reason">Reason</option>
                          <option value="personal">Personal</option>
                          <option value="vacation">Vacation</option>
                          <option value="sick">Sick</option>
                        </select>
                      </div>

                      <div class="col-auto my-1">
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default userDashboard;
