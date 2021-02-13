import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

class App extends Component {   
  state = {
    todos: [
      {
        id:  uuidv4(),
        title: "Work Out",
        completed: false,
      },
      {
        id:  uuidv4(),
        title: "Arbeiten",
        completed: true,
      },
      {
        id:  uuidv4(),
        title: "Kino besuchen",
        completed: false,
      },
    ],
  };

  // Toggle Complete

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //Delete Todo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed:false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
