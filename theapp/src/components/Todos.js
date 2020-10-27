import React, {Component} from 'react';

class Todos extends Component{
    render(){
        return (
        <div className = "test">
            <input type="checkbox" checked={this.props.item.completed} />
            <label>Text is: {this.props.item.text}</label>
        </div> 
        )
    } 
}

export default Todos