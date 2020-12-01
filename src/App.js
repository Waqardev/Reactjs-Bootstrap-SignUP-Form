import React, { Component } from "react";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    radio1: "male",
    check1: false,
    check2: false,
    check3: false,
    address: "",
    city: "",
    state: "",
    zip: "",
  };

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onRadioChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onCheckChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  onHandleDropdownChange = (e) => {
    this.setState({
      state: e.target.value,
    });
  };
  onHandleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      radio1: this.state.radio1,
      check1: this.state.check1,
      check2: this.state.check2,
      check3: this.state.check3,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
    };
    console.log(data);
  };
  render() {
    return (
      <div>
        <div className="my-5">
          <h1 className="text-center">Sign Up</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form className="needs-validation" onSubmit={this.onHandleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter first name"
                      name="firstName"
                      onChange={this.onHandleChange}
                      value={this.state.firstName}
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your first name
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter last name"
                      name="lastName"
                      onChange={this.onHandleChange}
                      value={this.state.lastName}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    onChange={this.onHandleChange}
                    value={this.state.email}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    onChange={this.onHandleChange}
                    value={this.state.password}
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radio1"
                      value="male"
                      checked={this.state.radio1 === "male"}
                      onChange={this.onRadioChange}
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radio1"
                      value="female"
                      checked={this.state.radio1 === "female"}
                      onChange={this.onRadioChange}
                    />
                    <label className="form-check-label">Female</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radio1"
                      value="other"
                      checked={this.state.radio1 === "other"}
                      onChange={this.onRadioChange}
                    />
                    <label className="form-check-label">Other</label>
                  </div>
                </div>

                <div className="form-group">
                  <label>Sports</label>
                  <br />
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="check1"
                      checked={this.state.check1}
                      onChange={this.onCheckChange}
                    />
                    <label className="form-check-label">Cricket</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="check2"
                      checked={this.state.check2}
                      onChange={this.onCheckChange}
                    />
                    <label className="form-check-label">Football</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="check3"
                      checked={this.state.check3}
                      onChange={this.onCheckChange}
                    />
                    <label className="form-check-label">Badminton</label>
                  </div>
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1234 Main St"
                    name="address"
                    onChange={this.onHandleChange}
                    value={this.state.address}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      name="city"
                      onChange={this.onHandleChange}
                      value={this.state.city}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Province</label>
                    <select
                      id="inputState"
                      className="form-control"
                      onChange={this.onHandleDropdownChange}
                    >
                      <option selected>Choose...</option>
                      <option value="punjab">Punjab</option>
                      <option value="sindh">Sindh</option>
                      <option value="balochistan">Balochistan</option>
                      <option value="kpk">Khyber Pakhtunkhwa</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label>Zip</label>
                    <input
                      type="text"
                      className="form-control"
                      name="zip"
                      onChange={this.onHandleChange}
                      value={this.state.zip}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
