import { Component } from "react";

export class AddForm extends Component {
  state = {
    name: '',
    email: ''
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">Name
          <input name='name' type="text" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label htmlFor="">
          <input name='email' type="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <button type="submit" className="button">Add</button>
      </form>
    )
  }
}