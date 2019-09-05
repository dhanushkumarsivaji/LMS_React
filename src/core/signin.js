import React, { Component } from "react";
import Datas from "../core/db";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { isAuthenticated } from "../auth/index";
import { Redirect } from "react-router-dom";
class signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "dhanushmech1995@gmail.com",
      password: "12345",
      redirectToReferer: false,
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  redirectUser = () => {
    if (this.state.redirectToReferer) {
      if (isAuthenticated().user && isAuthenticated().user.role === 1) {
        return <Redirect to="/admin" />;
      } else {
        return <Redirect to="/user" />;
      }
    }

    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  submit = e => {
    e.preventDefault();
    Datas.json.map(i => {
      if (i.email === this.state.email && i.password === this.state.password) {
        localStorage.setItem("user", JSON.stringify(i));
        this.setState({ redirectToReferer: true });
      }
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="col-md-5 container">
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              onChange={this.handleChange}
              type="email"
              value={email}
              className="form-control"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              value={password}
              className="form-control"
              placeholder="Password"
              name="password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {this.redirectUser}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(signin);
