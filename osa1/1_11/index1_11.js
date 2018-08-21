import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

  // Button-komponentti vastaa yksittäistä palautteenantonappia
  const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

  // Statistics-komponentti huolehtii tilastojen näyttämisestä
  const Statistics = (props) => {
    return (
      <div>
        <Statistic text="hyvä" state={props.state.hyva} />
        <Statistic text="neutraali" state={props.state.neutraali} />
        <Statistic text="huono" state={props.state.huono} />
        <Statistic text="keskiarvo" state={props.state.kaRnd} />
        <Statistic text="positiivisia" state={props.state.posRnd} />
      </div>
    )
  }

  // Statistic-komponentti huolehtii yksittäisen tilastorivin, esim. keskiarvon näyttämisestä
  const Statistic = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{props.text}</td><td>{props.state}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
  }  
 
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      kaikki: [1],      
      kaRnd: 0,
      posRnd: 0
    }
  }
  
  //metodi keskiarvon laskemiselle
  keskiarvo = (hyva, neutraali, huono) => {
    const a = ((hyva * 1) + (neutraali * 0) - (huono * 1)) / this.state.kaikki.length
    this.setState({ kaRnd: a.toFixed(1) })
  }

  //metodi positiivisten räknäämiselle
  positiiviset = (hyva, neutraali, huono) => {
    const b = (hyva * 100) / (hyva + neutraali + huono)
    this.setState({ posRnd: b.toFixed(1) + '%' })
  }

  klik1 = () => {    
    this.setState({
      hyva: this.state.hyva + 1,
      kaikki: this.state.kaikki.concat('')      
    })
    this.keskiarvo((this.state.hyva + 1), this.state.neutraali, this.state.huono)
    this.positiiviset((this.state.hyva + 1), this.state.neutraali, this.state.huono)
  }

  klik2 = () => {    
    this.setState({
      neutraali: this.state.neutraali + 1 ,
      kaikki: this.state.kaikki.concat('')
    })
    this.keskiarvo(this.state.hyva, (this.state.neutraali + 1), this.state.huono)
    this.positiiviset(this.state.hyva, (this.state.neutraali + 1), this.state.huono)
  }

  klik3 = () => {    
    this.setState({
      huono: this.state.huono + 1,
      kaikki: this.state.kaikki.concat('')
    })
    this.keskiarvo(this.state.hyva, this.state.neutraali, (this.state.huono + 1))
    this.positiiviset(this.state.hyva, this.state.neutraali, (this.state.huono + 1))
  }  

  render() {

    const heading1 = 'anna palautetta'
    const heading2 = 'statistiikka'

    const statsit = () => {
      if (this.state.kaikki.length === 1) {
        return (
          <div>
            <em>ei yhtään palautetta annettu</em>
          </div>
        )
      }
      return (
        <div>
          <Statistics state={this.state} />
        </div>
      )
    }
    
    

    //const klikit = () => this.state.kaikki.join(' ')
    //const positiivisetRnd = Math.round(  (this.state.hyva / this.state.kaikki.length  * 100 ) * 10 ) / 10

    return (
      <div>

        <h1>{heading1}</h1>
              
        <Button handleClick={this.klik1} text="Hyvä" />
        <Button handleClick={this.klik2} text="Neutraali" />
        <Button handleClick={this.klik3} text="Huono" />

        <h2>{heading2}</h2>

        <div>{statsit()}</div>        

      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)