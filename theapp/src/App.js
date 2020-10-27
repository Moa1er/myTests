import React, {Component} from 'react'
import Todos from './components/Todos'
import Joke from './components/Joke'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import './style.css'
import todosData from './components/todosData'

class App extends Component{
  render(){
    const todosComponent = todosData.map(todo => <Todos key={todo.id} item={todo} />);
    return (
      <div className="App">
        {todosComponent}
      </div>
    )
  }
}

export default App