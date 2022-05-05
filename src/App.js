
import './App.css';


import React, { Component } from 'react'
import axios from 'axios';


export default class App extends Component {

  state = {users: [] };

  async componentDidMount(){
    let output = await axios.get("https://jsonplaceholder.typicode.com/users");
    await new Promise(x => setTimeout(x,300));
    this.setState({users:output.data});
  }
  render() {
    return (
      <div> 
        {this.state.users.length > 0 ?
        (<div>
          {this.state.users.map(user => (
            <div key={user.id}>
              {user.username} : {user.name} </div>
        
         ) ) } </div>)  

         : <div> Loading... </div>}
      </div>
    )
  }
}


