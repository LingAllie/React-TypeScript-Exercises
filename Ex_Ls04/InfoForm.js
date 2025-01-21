import React from "react";
import "./style.css";

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      gender: "Male",
      email: "",
      address: "",
      skill: "",
      submitted: false,
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "skill") {
      this.setState((prevState) => {
        let skillList = prevState.skill ? prevState.skill.split(", ") : []; // Split previous skills into an array
        if (event.target.checked) {
          // Add the selected skill if it's not already in the list
          if (!skillList.includes(value)) {
            skillList.push(value);
          }
        } else {
          // Remove unselected skill
          const index = skillList.indexOf(value);
          if (index > -1) {
            skillList.splice(index, 1);
          }
        }
        return { skill: skillList.join(", ") }; // Join skills with a comma and return them
      });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (event) => {
    this.setState({ submitted: true });
    event.preventDefault();
  };

  handleReturn = () => {
    this.setState({
      fullname: "",
      gender: "Male",
      email: "",
      address: "",
      skill: "",
      submitted: false,
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h3>
            <center>Register User Form</center>
          </h3>
          <div>
            <p>FullName: </p>
            {this.state.submitted ? (
              <p>{this.state.fullname}</p>
            ) : (
              <input
                type="text"
                name="fullname"
                value={this.state.fullname}
                onChange={this.handleChange}
              />
            )}
          </div>
          <div>
            <p>Gender: </p>
            {this.state.submitted ? (
              <p>{this.state.gender}</p>
            ) : (
              <div className="radiobuttons">
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={this.handleChange}
                    checked={this.state.gender === "Male"}
                  />
                  <span>Male</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={this.handleChange}
                    checked={this.state.gender === "Female"}
                  />
                  <span>Female</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={this.handleChange}
                    checked={this.state.gender === "Other"}
                  />
                  <span>Other</span>
                </div>
              </div>
            )}
          </div>
          <div>
            <p>Email: </p>
            {this.state.submitted ? (
              <p>{this.state.email}</p>
            ) : (
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            )}
          </div>
          <div>
            <p>Address: </p>
            {this.state.submitted ? (
              <p>{this.state.address}</p>
            ) : (
              <textarea
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
            )}
          </div>
          <div>
            <p>Skill: </p>
            {this.state.submitted ? (
              <p>{this.state.skill}</p>
            ) : (
              <div className="checkboxes">
                <div>
                  <input
                    type="checkbox"
                    name="skill"
                    value="Java"
                    onChange={this.handleChange}
                    checked={this.state.skill.includes("Java")}
                  />
                  <span>Java</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="skill"
                    value="SQL"
                    onChange={this.handleChange}
                    checked={this.state.skill.includes("SQL")}
                  />
                  <span>SQL</span>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="skill"
                    value="HTML"
                    onChange={this.handleChange}
                    checked={this.state.skill.includes("HTML")}
                  />
                  <span>HTML</span>
                </div>
              </div>
            )}
          </div>
          {!this.state.submitted ? (
            <input type="submit" value="Register" />
          ) : (
            <button type="button" onClick={this.handleReturn}>
              Return
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default InfoForm;
