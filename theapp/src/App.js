import React, {Component} from 'react'
import Todos from './components/Todos'
import Joke from './components/Joke'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Conditional from './components/Conditional'
import './style.css'
import todosData from './components/todosData'

class App extends Component{
  constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 0,
            gender: "",
            destination: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

  handleChange(event) { 
      const {name, value} = event.target
      this.setState(() => {
        return {
          [name]: value
        }
      })
  }

  render(){
    return (
      <main className="App">
        <form>
          <input 
                name="firstName"
                placeholder="First Name"
                onChange={this.handleChange}
          /> <br />
          <input 
                name="lastName"
                placeholder="Last Name"
                onChange={this.handleChange}
          /> <br />
          <input 
                name="age"
                placeholder="Age"
                onChange={this.handleChange}
          /> <br />
          <label>Male
            <input 
                  name="gender"
                  type="radio"
                  value="male"
                  onChange={this.handleChange}
            /> <br />
          </label>
          <label>Female
            <input 
                  name="gender"
                  type="radio"
                  value="female"
                  onChange={this.handleChange}
            /> <br />
          </label>

          <select 
              value={this.state.destination}
              name="destination"
              onChange={this.handleChange}
          >
            <option>Miami</option>
            <option>Doubai</option>
            <option>Tokyo</option>
          </select> <br />
          
          <button>Submit</button>
        </form>
        <h1>Entered Information:</h1>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
      </main>
    )
  }
}

export default App