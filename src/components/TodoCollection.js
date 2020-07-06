import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoCollection extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} removeTodo={this.props.removeTodo} toggleComplete={this.props.toggleComplete} />
        ));
    }
}

TodoCollection.propTypes = {
    todos: PropTypes.array.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}
export default TodoCollection;
