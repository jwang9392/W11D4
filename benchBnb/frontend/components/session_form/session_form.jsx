import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({[type]: e.currentTarget.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  
  render() {
    return (
      <div>
        <br />
        <form>
          <h2>{this.props.formType}</h2>
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <br />
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}
            />
          </label>
          <br />
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
          
        </form>
      </div>
    );
  }
}

export default SessionForm;