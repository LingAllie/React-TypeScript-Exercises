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
      submitFullname: "",
      submitGender: "",
      submitEmail: "",
      submitAddress: "",
      submitSkill: "",
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
    this.setState({
      submitFullname: this.state.fullname,
      submitGender: this.state.gender,
      submitEmail: this.state.email,
      submitAddress: this.state.address,
      submitSkill: this.state.skill,
      submitted: true,
    });
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          className={this.state.submitted ? "form-hidden" : ""}
        >
          <h3>
            <center>Register User Form</center>
          </h3>
          <div>
            <p>FullName: </p>
            <input
              type="text"
              name="fullname"
              value={this.state.fullname}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <p>Gender: </p>
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
          </div>
          <div>
            <p>Email: </p>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <p>Address: </p>
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <p>Skill: </p>
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
          </div>
          <input type="submit" value="Register" />
        </form>

        {this.state.submitted && (
          <div className="submitted-info">
            <p>FullName: {this.state.submitFullname}</p>
            <p>Gender: {this.state.submitGender}</p>
            <p>Email: {this.state.submitEmail}</p>
            <p>Address: {this.state.submitAddress}</p>
            <p>Skill: {this.state.submitSkill}</p>
          </div>
        )}
      </div>
    );
  }
}

export default InfoForm;
