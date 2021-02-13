import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./AddTodo";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Work Out",
        completed: false,
      },
      {
        id: 2,
        title: "Arbeiten",
        completed: true,
      },
      {
        id: 3,
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

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
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
