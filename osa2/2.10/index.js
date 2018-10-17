import React from 'react'
import Persoona from './components/Persoona'
import Lomake from './components/Lomake'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
    newName: '',
    newNumber: ''    
    }
    
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }
  handleNumberChange = (event) => {    
    this.setState({ newNumber: event.target.value })
  }

  addName = (event) => {
    event.preventDefault()

    const nameObject = {
      nimi: this.state.newName,
      id: this.state.persons.length + 1,
      numero: this.state.newNumber
    }

    const persons =
      (this.state.persons.filter(person => (person.nimi === this.state.newName))).length > 0 ?
        this.state.persons : this.state.persons.concat(nameObject)

    console.log(persons)

    this.setState({
      persons,
      newName: 'x',
      newNumber: '0'
    });

  }

  render() { 


         
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Lomake
          numero={this.newNumber}
          nimi={this.newName}          
          onNameChange={this.handleNameChange}
          onNumberChange={this.handleNumberChange}
          onSubmit={this.addName}
        />

        <h2>Numerot</h2>
        <ul>        
          <Persoona persons={this.state.persons} />        
        </ul> 
      <ul>

      </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)