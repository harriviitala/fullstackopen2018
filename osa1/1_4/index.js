import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'

  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]

const Kurssi = (props) => {
  return (
    <div>
    <h1>{props.kurssinNimi}</h1>
    </div>
  )
}

const Sisalto = (props) => {
  return (
    <div>
    <p>{props.osat[0].nimi}, {props.osat[0].tehtavia} tehtävää </p>
    <p>{props.osat[1].nimi}, {props.osat[1].tehtavia} tehtävää </p>
    <p>{props.osat[2].nimi}, {props.osat[2].tehtavia} tehtävää </p>
    </div>
  )
}

const Yhteensa = (props) => {
   return (
    <div>
      <p>{props.tehtavat}</p>
    </div>
  )
}


return (
    <div>
      <Kurssi kurssinNimi={kurssi} />
      <Sisalto osat={osat}  />    
      <Yhteensa tehtavat={osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)