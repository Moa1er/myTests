import React, {Component} from 'react'

class Todos extends Component{
    render(){
    let test = ""
    this.props.item.completed ? test = "word_barre" : test ="word"
        return (
        <div className="iSeeU">
            <input 
                type="checkbox" 
                checked={this.props.item.completed} 
                onChange={() => {this.props.handleChange(this.props.item.id)}}
            />
            <label className={test}>Text is: {this.props.item.text} </label>
        </div> 
        )
    } 
}

export default Todos