import React, { Component } from 'react';
import Header from './components/layout/Header'
import TodoCollection from './components/TodoCollection';
import axios from 'axios';
import './App.css';

class App extends Component {
    state = {
        todos: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=7').then(response => this.setState({ todos: response.data }))
    }
    removeTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
            response => this.setState({
                todos: [...this.state.todos.filter(todo => todo.id !== id)]
            })
        );
    }
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(
                todo => {
                    // toggle the completed value
                    if (todo.id === id) {
                        todo.completed = !todo.completed
                    }
                    return todo;
                }
            )
        });
    }
    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <TodoCollection todos={this.state.todos} removeTodo={this.removeTodo} toggleComplete={this.toggleComplete} />
                </div>
            </div>
        );
    }
}

export default App;
