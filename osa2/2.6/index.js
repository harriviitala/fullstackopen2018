import React from 'react';
import Name from './components/Name'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: '',
      showAll: true
    }
    
  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: this.state.newName,
      date: new Date().toISOString(),      
      id: this.state.persons.length + 1
    }

    const persons = this.state.persons.concat(nameObject)

    this.setState({
      persons,
      newName: ''
  } )
  }

  render() {    
    const namesToShow =
    this.state.showAll ?
      this.state.persons :
      this.state.persons.filter(person => person.name.important === true)
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addName}>
          nimi: 
          <input
            value={this.state.newName}
            onChange={this.handleNameChange}
          />
          <button type="submit">lisää</button>
        </form>
        <h2>Numerot</h2>
        <ul>
        {namesToShow.map(name => <Name key={name} name={name} />)}
      </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)