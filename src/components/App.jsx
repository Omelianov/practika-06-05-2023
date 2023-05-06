import { Component } from 'react';
import { data } from '../data/users';
import { UsersList } from './UsersList';
import { AddForm } from './AddForm';
import { nanoid } from 'nanoid';

class App extends Component {
  state = { users: data };
  deleteUser = (id) => {
    this.setState((prevState) => {
      return {users:prevState.users.filter((user)=>user.id!==id)}
    })
  }

  addContact = (userData) => {
    const newUser = { ...userData, id: nanoid() }
    this.setState((prevState)=> {
        return {users: [...prevState.users,newUser]}
      }
    )
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <UsersList users={users} deleteUser={this.deleteUser} />
        <AddForm addContact={this.addContact} />
      </div>
    );
  }
}
export default App;
