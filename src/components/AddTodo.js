import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        // add new item
        this.props.addTodo(this.state.title);
        // clear state title after submit
        this.setState({title: ''})
    }
    // update title with user input
    onChange = (e) => this.setState({
        title: e.target.value
    });
    render() {
        return (
            <form 
            onSubmit={this.onSubmit} className="add-todo">
                <input 
                type="text" 
                name="title" 
                placeholder="Add new item" className="field"
                value={this.state.title}
                onChange={this.onChange}
                />
                <input 
                type="submit" 
                value="submit" className="btn"
                />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
