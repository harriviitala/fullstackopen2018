import React from 'react'
import ReactDOM from 'react-dom'
 
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      hyva: 1,
      neutraali: 1,
      huono: 1
    }
  }

  klik1 = () => {
    const stat1 = 0
    this.setState({
      hyva: this.state.hyva + 1
    })
  }

  klik2 = () => {
    const stat2 = 0
    this.setState({
      neutraali: this.state.neutraali + 1
    })
  }

  klik3 = () => {
    const stat3 = 0
    this.setState({
      huono: this.state.huono + 1
    })
  }

  asetaArvoon = (arvo) => () => this.setState({ counter: arvo })

  render() {
    
    const heading1 = 'anna palautetta'
    const heading2 = 'statistiikka'
            
    const Button = ({ handleClick, text }) => (
      <button onClick={handleClick}>
        {text}
      </button>
    )

    return (
      <div>
      <h1>{heading1}</h1>
            
      <Button
          handleClick={this.klik1}
          text="Hyvä"
        />
        <Button
          handleClick={this.klik2}
          text="Neutraali"
        />
        <Button
          handleClick={this.klik3}
          text="Huono"
        />

        <h2>{heading2}</h2>

        <p>hyvä {this.state.hyva}</p>
        <p>neutraali {this.state.neutraali}</p>
        <p>huono {this.state.huono}</p>

      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)