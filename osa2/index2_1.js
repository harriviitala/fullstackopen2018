import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
   const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        id:1,
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        id:2,
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        id:3,
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

const Kurssi = (props) => {
  return (
    <div>
    <h1>{props.kurssinNimi}</h1>
    </div>
  )
}

return (
    <div>
      <Kurssi kurssinNimi={kurssi.nimi} />
      <ul>
        {kurssi.osat.map(osa => <li key={osa.id}>{osa.nimi}, {osa.tehtavia}</li>)}
      </ul>      
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)