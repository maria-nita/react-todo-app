import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    render() {
        return (
            <div className="todo-item" style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={this.props.todo.completed} onChange={(e) => this.props.toggleComplete(this.props.todo.id, e)} />
                    {this.props.todo.title}
                    {/* <button onClick={this.props.removeTodo.bind(this, this.props.todo.id)}>x</button> */}
                    <button onClick={(e) => this.props.removeTodo(this.props.todo.id, e)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
}

export default TodoItem
