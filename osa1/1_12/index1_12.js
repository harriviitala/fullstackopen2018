import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  randomInteger = (min,max) => {
      var rand = min + Math.random() * (max - min)
      rand = Math.round(rand);
      return rand;
  }

  shuflaa = () => {   
    let arrLength = this.props.anecdotes.length - 1;
    this.setState({
        anec: this.randomInteger(0, arrLength)
    })
  }

  render() {  
    return (
      <div>
        <Button handleClick={this.shuflaa} text="Get anecdotes" />
        {this.props.anecdotes[this.state.anec]}
      </div>
    )
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)