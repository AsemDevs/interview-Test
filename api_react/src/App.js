import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.js';



class App extends Component {
  
  state = {
    todos: []
    
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      // console.log(this.state.todos)
    })
    .catch(console.log);
    
  }

  render() {

    return (
      
       <div className="container">
        <div className="col-xs-12">
        <h1>My Todo's</h1>
        <ul className="list-group">
        {this.state.todos.map((todo) => (
            <li className={todo.completed ? 'text-white bg-success list-group-item' : 'text-dark bg-light list-group-item'} key={todo.id}>
              <h5>{todo.id}</h5>
              <h6 className="card-subtitle mb-2">
              { todo.completed &&
                <span>
                Completed
                </span>
              }
              { !todo.completed &&
                <span>
                  Pending
                </span>
              }
              </h6>
              <p className="card-text">{todo.title}</p>
            </li>
        ))}
        </ul>
        </div>
       </div>
    );
  }
}
export default App;