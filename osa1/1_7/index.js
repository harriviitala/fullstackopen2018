import React from 'react'
import ReactDOM from 'react-dom'
 
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      kaikki: [],
      positiivisetRound: 0
    }
  }

  klik1 = () => {    
    this.setState({
      hyva: this.state.hyva + 1,
      kaikki: this.state.kaikki.concat('x')
    })
  }

  klik2 = () => {    
    this.setState({
      neutraali: this.state.neutraali + 1 ,
      kaikki: this.state.kaikki.concat('x')
    })
  }

  klik3 = () => {    
    this.setState({
      huono: this.state.huono + 1,
      kaikki: this.state.kaikki.concat('x')
    })
  }  

  render() {
    
    const heading1 = 'anna palautetta'
    const heading2 = 'statistiikka'

    const klikit = () => this.state.kaikki.join(' ')
    const klikCount = this.state.kaikki.length    

    //hyvien osuus kokonaismäärästä
    const positiiviset = (this.state.hyva / klikCount * 100 )
    const positiivisetRound = Math.round(  positiiviset * 10 ) / 10

    // keskiarvo 
    const keskiarvo = ((this.state.hyva * 1 ) + (this.state.neutraali * 0) + (this.state.huono * -1)) / klikCount
    const kaRnd = Math.round(  keskiarvo * 10 ) / 10
            
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
        <p>Keskiarvo {kaRnd}</p>     
        <p>positiivisia {positiivisetRound} %</p>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)