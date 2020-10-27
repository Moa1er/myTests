import React, {Component} from "react"

class Joke extends Component{
    render(){
        return (
            <div>
                <p>Question: {this.props.question}</p>
                <p>PunchLine: {this.props.punchLine}</p>
            </div>
        )
    } 
}

export default Joke