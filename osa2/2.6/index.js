import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: ''      
    }
    
  }

  handleNameChange = (event) => {    
    this.setState({ newName: event.target.value })
  }  

  addName = (event) => {
    event.preventDefault()    

    const nameObject = {
      nimi: this.state.newName,
      id: this.state.persons.length + 1
    }
        const persons = this.state.persons.concat(nameObject)

    this.setState({
      persons,
      newName: ''
    });

  }

  render() { 


         
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
        {this.state.persons.map(person => <li key={person.id}>{person.nimi}</li>)}
      </ul> 
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)